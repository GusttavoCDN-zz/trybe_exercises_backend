/* eslint-disable mocha/no-setup-in-describe */
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../models/book');

describe('O model de Book', function () {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('possui o nome "Book"', function () {
    checkModelName(Book)('Book');
  });

  describe('possui as propriedades "title", "author", "pageQuantity"', function () {
    const properties = ['title', 'author', 'pageQuantity'];
    properties.forEach(checkPropertyExists(book));
  });
});
