const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
routes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server is running on port ' + port));

module.exports = app;
