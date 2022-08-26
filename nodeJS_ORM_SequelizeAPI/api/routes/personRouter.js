const { Router } = require('express');
const PersonController = require('./../controllers/PersonController');

const router = Router();

router.get('/:id', PersonController.getPerson);
router.put('/:id', PersonController.updatePerson);
router.delete('/:id', PersonController.deletePerson);
router.get('/', PersonController.getPeople);
router.post('/', PersonController.createPerson);

module.exports = router;
