const { Router } = require('express');
const PersonController = require('../controllers/PersonController');
const EnrollmentController = require('../controllers/EnrollmentController');

const router = Router();

router.get('/:studentId/enrollments/:enrollmentId', EnrollmentController.getOne);
router.get('/:studentId/enrollments', PersonController.getEnrollments);
router.get('/all', PersonController.getAll);
router.get('/:id', PersonController.getOne);
router.get('/', PersonController.getAllActive);
router.get('/enrollments/full', EnrollmentController.getFull);
router.get('/enrollments/:classId', EnrollmentController.getAllByClass);

router.post('/:studentId/enrollments/', EnrollmentController.create);
router.post('/:studentId/cancel', PersonController.cancelStudent);
router.post('/:id/restore', PersonController.restore);
router.post('/', PersonController.create);

router.put('/:studentId/enrollments/:enrollmentId', EnrollmentController.update);
router.put('/:id', PersonController.update);
router.delete('/:id', PersonController.delete);

// eslint-disable-next-line sonarjs/no-duplicate-string
router.delete('/:studentId/enrollments/:enrollmentId', EnrollmentController.delete);

module.exports = router;
