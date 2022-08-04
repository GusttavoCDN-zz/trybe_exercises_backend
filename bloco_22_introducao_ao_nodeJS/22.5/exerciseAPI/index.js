const express = require('express');
const crypto = require('crypto');
const app = express();

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

app.use(express.json());

function checkRequest(req, res, next) {
  const { productName, infos } = req.body;
  if (!productName || !infos) return res.status(400).send('Missing productName or infos');
  if (!infos['salesDate'] || !infos['warrantyPeriod'])
    return res.status(400).send('Missing salesDate or warrantyPeriod');
  req.productName = productName;
  req.infos = infos;
  next();
}

function validateRequest(req, res, next) {
  const { productName, infos } = req;
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (productName.length < 4)
    return res
      .status(400)
      .json({ message: 'O campo productName deve ter pelo menos 4 caracteres' });
  if (!dateRegex.test(infos.salesDate))
    return res.status(400).json({ message: 'Data inválida' });
  if (infos.warrantyPeriod < 1 || infos.warrantyPeriod > 3)
    return res.status(400).json({ message: 'Período de garantia inválido' });
  next();
}

app.post('/sales', checkRequest, validateRequest, (req, res) => {
  return res.sendStatus(201);
});

function validateSignup(req, res, next) {
  const { email, password, firstName } = req.body;
  if (!email || !password || !firstName)
    return res.status(401).json({ message: 'Missing fields' });
  req.headers.Authorization = generateToken();
  next();
}

function validateToken(req, res, next) {
  const { Authorization } = req.headers;
  if (!Authorization || Authorization.length !== 16)
    return res.status(401).json({ message: 'Missing Authorization' });
  next();
}

app.post('/signup', validateSignup, validateToken, (req, res) => {
  return res.sendStatus(201);
});

app.listen(3000, () => console.log('Server started on port 3000'));
