const personRouter = require('./personRouter');
const classRouter = require('./classRouter');
const levelRouter = require('./levelRouter');

/**
 * @param {import('express').Express} app
 */
const routes = (app) => {
  app.use('/people', personRouter);
  app.use('/classes', classRouter);
  app.use('/levels', levelRouter);
};

module.exports = routes;
