const booksRouter = require('./booksRouter');

/**
 * @param {import('express').Express} app
 */
const routes = (app) => {
  app.use('/books', booksRouter);
};

module.exports = routes;
