const db = require('./db');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await db.execute(
    'INSERT INTO model_example.movies (nome, direcao, data_de_lancamento) VALUES (?, ?, ?)',
    [title, directedBy, releaseYear]
  );

  return { id: result.insertId };
};

const getById = async (id) => {
  const [result] = await db.execute('SELECT * FROM model_example.movies WHERE id = ?', [
    id,
  ]);

  if (result.length === 0) return null;
  return result[0];
};

module.exports = {
  create,
  getById,
};
