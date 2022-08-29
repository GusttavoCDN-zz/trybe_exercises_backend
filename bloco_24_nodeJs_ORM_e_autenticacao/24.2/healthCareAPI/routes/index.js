const patientsRouter = require('./patientsRouter');

module.exports = (app) => {
  app.use('/patients', patientsRouter);
};
