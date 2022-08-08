const express = require('express');
const { getAllBooks, getBooksByAuthorId, getBookById, addBook} = require('./models/Book');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/books?', async (req, res) => {
  const { author_id } = req.query;
  const books = author_id
    ? await getBooksByAuthorId(Number(author_id))
    : await getAllBooks();

  return res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await getBookById(Number(id));
  if (!book.length) return res.status(404).json({ message: 'Not found'});

  return res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  if (!title || author_id < 1 || author_id > 3) return res.status(400).json({ message: 'Bad request'});
  await addBook(title, author_id);
  return res.status(201).json({ message: 'Created'});
})

// app.get('/books', async (req, res) => {
//   const books = await getAllBooks();
//   return res.status(200).json(books);
// });

app.listen(port, () => console.log('API is Running'));
