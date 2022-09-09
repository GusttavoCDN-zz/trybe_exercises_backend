import { Application } from 'express';
import userRoutes from './userRoutes';
import authRoutes from './authRoutes';
import postRoutes from './postRoutes';
import productRoutes from './productRoutes';
import restaurantRoutes from './restaurantRoutes';
import 'express-async-errors';

export default (app: Application) => {
  app.use('/users', userRoutes);
  app.use('/posts', postRoutes);
  app.use('/products', productRoutes);
  app.use('/restaurants', restaurantRoutes);
  app.use(authRoutes);
};
