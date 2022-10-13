import express, { Express } from 'express';
import handleErrors from '../middlewares/handleErrors';
import routes from './routes';

const app: Express = express();

app.use(express.json());
routes(app);

app.use(handleErrors);

app.listen(process.env.AP_PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.AP_PORT || 3000}`);
});
