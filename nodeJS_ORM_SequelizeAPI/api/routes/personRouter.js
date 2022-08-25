const { Router } = require('express');
const PersonController = require('./../controllers/PersonController');

const router = Router();

router.get('/', PersonController.getPeople);

module.exports = router;
