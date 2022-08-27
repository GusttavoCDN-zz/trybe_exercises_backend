const { Router } = require('express');
const LevelController = require('../controllers/LevelController');

const router = Router();

router.get('/', LevelController.getAll);
router.get('/:id', LevelController.getOne);
router.post('/', LevelController.create);
router.put('/:id', LevelController.update);
router.delete('/:id', LevelController.delete);

module.exports = router;
