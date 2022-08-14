const db = require('./db');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await db.execute(
    'INSERT INTO model_example.movies (nome, direcao, data_de_lancamento) VALUES (?, ?, ?)',
    [title, directedBy, releaseYear]
  );

  return { id: result.insertId };
};

module.exports = {
  create,
};
