const express = require('express');

const app = express();

app.use(express.json());

const users = [{ name: 'Gustavo', age: 22 }, { name: 'Aline', age: 21 }];

// Crie uma rota GET /ping
app.get('/ping', (request, response) => {
  response.json(users);
});

// Crie uma rota POST /hello
app.post('/hello', (request, response) => {
  const { name } = request.body;
  const message = { message: `Hello ${name}` };
  return response.json(message);
});

app.post('/greetings', (request, response) => {
  const { name, age } = request.body;

  if (age < 17 || !age) return response.status(401).json({ message: 'Unauthorized' });

  const message = { message: `Hello ${name}` };
  users.push({ name, age });
  return response.json(message);
});

app.put('/users/:name/:age', (request, response) => {
  const { name, age } = request.params;
  const { name: newName, age: newAge } = request.body;
  const user = users.find((user) => user.name === name);

  if (!user) return response.status(404).json({ message: 'User not found' });
  if (age < 17 || !age) return response.status(401).json({ message: 'Unauthorized' });

  user.name = newName;
  user.age = newAge;

  return response.json(user);
});

app.listen(3000, () => console.log('Server started on port 3000'));
