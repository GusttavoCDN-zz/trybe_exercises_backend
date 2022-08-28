const BooksServices = require('../services/BooksServices');

class BooksController {
  static async getAll(_req, res) {
    const books = await BooksServices.getAll();
    return res.status(200).json(books);
  }

  static async getById(req, res) {
    const { id } = req.params;
    const book = await BooksServices.getById(id);
    return res.status(200).json(book);
  }

  static async create(req, res) {
    const createdBook = await BooksServices.create(req.body);
    return res.status(201).json(createdBook);
  }

  static async update(req, res) {
    const { id } = req.params;
    const updatedBook = await BooksServices.update(req.body, id);
    return res.status(200).json(updatedBook);
  }

  static async delete(req, res) {
    const { id } = req.params;
    await BooksServices.delete(id);
    return res.status(200).json({ message: `Book ${id} deleted` });
  }
}

module.exports = BooksController;
