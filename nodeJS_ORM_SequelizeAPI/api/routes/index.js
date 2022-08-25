const personRouter = require('./personRouter');

/**
 * @param {import('express').Express} app 
 */
const routes = (app) => {
  app.use('/people', personRouter);
};

module.exports = routes;
