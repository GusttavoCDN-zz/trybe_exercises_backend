import { Application } from 'express';
import plantsRoutes from './plantsRoutes';

export default (app: Application): void => {
  app.use('/plants', plantsRoutes);
};
