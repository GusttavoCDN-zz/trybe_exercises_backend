/* eslint-disable sonarjs/no-duplicate-string */
const Joi = require('joi');
const { Op } = require('sequelize');
const { Book } = require('../models');

class BooksServices {
  static async sendError(code, message) {
    const error = new Error();
    error.code = code;
    error.message = message;
    throw error;
  }

  static async exists(id) {
    return Book.findByPk(id);
  }

  static orderBooks(books) {
    const orderedBooks = books.sort((a, b) => a.title.localeCompare(b.title));
    return orderedBooks;
  }

  static validateParamsId(unknown) {
    const schema = Joi.number().positive().integer();

    const { error } = schema.validate(unknown);
    return { error } || null;
  }

  static validateBook(unknown) {
    const schema = Joi.object({
      title: Joi.string().min(3).max(50).required(),
      author: Joi.string().min(3).max(30).required(),
      pageQuantity: Joi.number().positive().required(),
    });

    const { error } = schema.validate(unknown);
    return { error } || null;
  }

  static async getAll() {
    const books = await Book.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt', 'id'] },
    });
    return this.orderBooks(books);
  }

  static async getById(id) {
    const { error } = this.validateParamsId(id);
    if (error) return this.sendError('400', error.message);

    const book = await Book.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (!book) return this.sendError('404', 'Book not found');
    return book;
  }

  // ? O objeto Op pode ser usado para fazer comparaçoes mais precisas de SQL usando like, and, or, etc.
  static async getByAuthor(author) {
    const books = await Book.findAll({
      where: {
        author: {
          [Op.like]: `${author}%`,
        },
      },
      attributes: { exclude: ['createdAt', 'updatedAt', 'id'] },
    });
    return this.orderBooks(books);
  }

  static async create(book) {
    const { error } = this.validateBook(book);
    if (error) return this.sendError('400', error.message);

    await Book.create(book);
    return book;
  }

  static async update(book, id) {
    const bookExists = await this.exists(id);
    if (!bookExists) return this.sendError('404', 'Book not found');

    const { error } = this.validateBook(book);
    if (error) return this.sendError('400', error.message);

    await Book.update(book, { where: { id } });
    return book;
  }

  static async delete(id) {
    const bookExists = await this.exists(id);
    if (!bookExists) return this.sendError('404', 'Book not found');

    await Book.destroy({ where: { id } });
  }
}

module.exports = BooksServices;
