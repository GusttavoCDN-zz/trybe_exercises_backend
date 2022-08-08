const connection = require('./connection');

const getAllBooks = async () => {
  const [books] = await connection.query('SELECT * FROM books');
  return books;
};

const getBooksByAuthorId = async (id) => {
  const [books] = await connection.query('SELECT * FROM books WHERE author_id = ?', id);
  // console.log(books);
  return books;
};

const getBookById = async (id) => {
  const [book] = await connection.query('SELECT * FROM books WHERE id = ?', id);
  console.log(book);
  return book;
};

const addBook = async (title, author_id) => {
  const [book] = await connection.query(
    'INSERT INTO books (title, author_id) VALUES (?, ?)',
    [title, author_id]
  );
  return book;
};

module.exports = {
  getAllBooks,
  getBooksByAuthorId,
  getBookById,
  addBook,
};
