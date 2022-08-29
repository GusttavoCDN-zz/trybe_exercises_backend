const { Router } = require('express');
const PatientController = require('../controllers/PatientController');
const router = Router();

router.get('/', PatientController.getAllPatientsAndPlan);
router.get('/surgeries', PatientController.getAllPatientsAndSurgeries);
router.get('/plan/:planId', PatientController.getPatientsByPlanId);

module.exports = router;
