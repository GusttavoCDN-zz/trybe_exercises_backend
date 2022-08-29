const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'iamotakubaby';

const validateBody = (body, res) => {
  const { username, password } = body;

  if (!username || !password) {
    res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });
    return false;
  }

  return true;
};

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!validateBody(req.body, res)) return;

    const user = await User.findOne({ where: { username } });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });
    }

    /* Criamos uma config básica para o nosso JWT, onde:
        expiresIn -> significa o tempo pelo qual esse token será válido;
        algorithm -> algoritmo que você usará para assinar sua mensagem
                    (lembra que falamos do HMAC-SHA256 lá no começo?). */

    /* A propriedade expiresIn aceita o tempo de forma bem descritiva. Por exemplo: '7d' = 7 dias. '8h' = 8 horas. */
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: user }, secret, jwtConfig);
    res.status(200).json({ token });

    // return res.status(200).json({ message: 'Login efetuado com sucesso' });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
