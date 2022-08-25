const { Router } = require('express');
const PersonController = require('./../controllers/PersonController');

const router = Router();

router.get('/', PersonController.getPeople);
router.get('/:id', PersonController.getPerson);

module.exports = router;
