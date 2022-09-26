/* eslint-disable sonarjs/no-duplicate-string */
import { Router } from 'express';
import BooksRepository from '../repositories/BooksRepository';
import BooksController from '../controllers/BooksController';
import BooksService from '../services/BooksService';
import Book from '../database/models/BookModel';

const router = Router();

const booksRepository = new BooksRepository(Book);
const booksService = new BooksService(booksRepository);
const booksController = new BooksController(booksService);

router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);
router.post('/books', booksController.create);
router.put('/books/:id', booksController.update);
router.delete('/books/:id', booksController.delete);

export default router;
