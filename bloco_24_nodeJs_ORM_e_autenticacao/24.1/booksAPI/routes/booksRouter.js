const { Router } = require('express');
const BooksController = require('../controllers/BooksController');

const router = Router();

router.put('/:id', BooksController.update);
router.get('/:id', BooksController.getById);
router.get('/', BooksController.getAll);
router.post('/', BooksController.create);
router.delete('/:id', BooksController.delete);

module.exports = router;
