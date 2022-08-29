const { Patient, Plan, Surgerie } = require('../models');

class PatientService {
  static async getAllPatientsAndPlan() {
    const patients = await Patient.findAll({
      include: [{ model: Plan, as: 'plan' }],
    });
    return patients;
  }

  static async getAllPatientsAndSurgeries() {
    const patients = await Patient.findAll({
      include: [
        {
          model: Surgerie,
          as: 'surgeries',
          through: {
            attributes: [],
          },
        },
      ],
    });
    return patients;
  }

  static async getPatientsByPlanId(id) {
    const patients = await Plan.findAll({
      where: { planId: id },
      include: [
        {
          model: Patient,
          as: 'patients',
          attributes: {
            exclude: ['plan_id'],
          },
        },
      ],
      attributes: { exclude: ['planId'] },
    });

    return patients;
  }
}

module.exports = PatientService;
