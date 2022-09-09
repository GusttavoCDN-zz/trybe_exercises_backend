import { Router } from 'express';
import BookController from '../controllers/BookController';
import 'express-async-errors';

const bookController = new BookController();
const router = Router();

router.get('/books', bookController.getAll);
router.get('/books/:id', bookController.getById);
router.post('/books', bookController.create);
router.put('/books/:id', bookController.update);
router.delete('/books/:id', bookController.delete);

export default router;
