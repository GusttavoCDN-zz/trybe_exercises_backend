const express = require('express');
const simpsons = require('./simpsons');
const fs = require('fs/promises');

const app = express();
app.use(express.json());

function verifyIfSimpsonsAlreadyExists(id) {
  return simpsons.some((simpson) => simpson.id === id);
}

function registerSimpson(simpson) {
  const newFileContent = [...simpsons, simpson];
  fs.writeFile('./simpsons.json', JSON.stringify(newFileContent));
}

app.get('/simpsons', (request, response) => {
  response.json(simpsons);
});

app.get('/simpsons/:id', (request, response) => {
  const { id } = request.params;
  const simpson = simpsons.find((simpson) => simpson.id === id);
  if (!simpson) return response.status(404).send({ message: 'simpson not found' });
  response.json(simpson);
});

app.post('/simpsons', (request, response) => {
  const { id, name } = request.body;
  if (!id || !name)
    return response.status(400).send({ message: 'id and name are required' });

  const simpson = { id, name };
  if (verifyIfSimpsonsAlreadyExists(id))
    return response.status(409).json({ message: 'simpson already exists' });

  registerSimpson(simpson);
  return response.status(204).end();
});

app.listen(3000, () => console.log('Server started on port 3000'));
