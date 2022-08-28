const { Router } = require('express');
const PersonController = require('../controllers/PersonController');
const EnrollmentController = require('../controllers/EnrollmentController');

const router = Router();

router.get('/all', PersonController.getAll);
router.post('/:id/restore', PersonController.restore);
router.get('/:id', PersonController.getOne);
router.put('/:id', PersonController.update);
router.delete('/:id', PersonController.delete);
router.get('/', PersonController.getAllActive);
router.post('/', PersonController.create);

// eslint-disable-next-line sonarjs/no-duplicate-string
router.get('/:studentId/enrollments/:enrollmentId', EnrollmentController.getOne);
router.post('/:studentId/enrollments/', EnrollmentController.create);
router.put('/:studentId/enrollments/:enrollmentId', EnrollmentController.update);
router.delete('/:studentId/enrollments/:enrollmentId', EnrollmentController.delete);

module.exports = router;
