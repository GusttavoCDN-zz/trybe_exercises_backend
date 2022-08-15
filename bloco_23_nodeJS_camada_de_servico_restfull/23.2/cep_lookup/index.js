const express = require('express');
const cepRoutes = require('./routes/cepRoutes');

const app = express();

app.use(express.json());

app.use('/cep', cepRoutes);

app.listen(3000, () => console.log('API running on port 3000'));
