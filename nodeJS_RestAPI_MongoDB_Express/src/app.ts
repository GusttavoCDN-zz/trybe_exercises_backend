import express from 'express';
import db from './database/config/Connect';
import routes from './routes';

const app = express();
app.use(express.json());
routes(app);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default app;
