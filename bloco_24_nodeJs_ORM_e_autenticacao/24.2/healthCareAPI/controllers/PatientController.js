const PatientService = require('../services/PatientService');

class PatientController {
  static async getAllPatientsAndPlan(req, res) {
    const patients = await PatientService.getAllPatientsAndPlan();
    return res.status(200).json(patients);
  }

  static async getAllPatientsAndSurgeries(req, res) {
    const patients = await PatientService.getAllPatientsAndSurgeries();
    return res.status(200).json(patients);
  }

  static async getPatientsByPlanId(req, res) {
    const { planId } = req.params;
    const patients = await PatientService.getPatientsByPlanId(planId);
    return res.status(200).json(patients);
  }
}

module.exports = PatientController;
