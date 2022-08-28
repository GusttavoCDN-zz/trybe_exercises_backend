const express = require('express');
require('express-async-errors');
const routes = require('./routes');

const app = express();
app.use(express.json());
routes(app);

app.use(
  /**
   * @param {Error} error
   * @param {import('express').Request} _req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} _next
   */
  ({ code, message }, _req, res, _next) => {
    if (code && message) return res.status(code).json({ message });
    res.status(500).json({ message: 'Invalid request' });
  },
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;
