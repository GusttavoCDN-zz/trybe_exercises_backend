const { Router } = require('express');
const LoginController = require('../controllers/Login');
const auth = require('../middlewares/auth');

const router = Router();

router.post('/login', LoginController.login);
router.get('/users/me', auth, LoginController.getUser);
router.get('/top-secret', auth, LoginController.getUser);

module.exports = router;
