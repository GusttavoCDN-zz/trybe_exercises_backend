import express from 'express';

const app = express();
app.use(express.json());

const books = [
  { id: 1, title: 'The Lord of the Rings' },
  { id: 2, title: 'The Hobbit' },
];

app.get('/books', (req, res) => {
  res.status(200).json(books);
});

app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(({ id: bookId }) => bookId === Number(id));
  res.status(200).json(books[index]);
});

app.post('/books', (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(200).json({ message: 'Livro cadastrado com sucesso' });
});

app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(({ id: bookId }) => bookId === Number(id));
  books[index].title = req.body.title;
  res.status(200).json(books);
});

app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(({ id: bookId }) => bookId === Number(id));
  books.splice(index, 1);
  res.status(200).json(books);
});

export default app;
