import { Application } from 'express';
import BooksRoutes from './BooksRoutes';

export default (app: Application) => {
  app.use(BooksRoutes);
};
