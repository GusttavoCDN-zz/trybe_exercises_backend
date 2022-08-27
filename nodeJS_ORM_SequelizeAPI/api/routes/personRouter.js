const { Router } = require('express');
const PersonController = require('./../controllers/PersonController');
const EnrollmentController = require('./../controllers/EnrollmentController');

const router = Router();

router.get('/:id', PersonController.getPerson);
router.put('/:id', PersonController.updatePerson);
router.delete('/:id', PersonController.deletePerson);
router.get('/', PersonController.getPeople);
router.post('/', PersonController.createPerson);

router.get('/:studentId/enrollments/:enrollmentId', EnrollmentController.getOne);
router.post('/:studentId/enrollments/', EnrollmentController.create);
router.put('/:studentId/enrollments/:enrollmentId', EnrollmentController.update);
router.delete('/:studentId/enrollments/:enrollmentId', EnrollmentController.delete);

module.exports = router;
