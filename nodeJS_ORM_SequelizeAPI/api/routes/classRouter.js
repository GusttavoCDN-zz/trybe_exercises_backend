const { Router } = require('express');
const ClassController = require('../controllers/ClassController');

const router = Router();

router.get('/:id', ClassController.getOne);
router.get('/', ClassController.getAll);

router.put('/:id', ClassController.update);

router.delete('/:id', ClassController.delete);

router.post('/', ClassController.create);

module.exports = router;
