/* eslint-disable camelcase */
const { Enrollment } = require('../models');

class EnrollmentController {
  static async getOne(req, res) {
    const { studentId, enrollmentId } = req.params;
    try {
      const enrollment = await Enrollment.findOne({
        where: { id: enrollmentId, student_id: studentId },
      });

      if (!enrollment) return res.status(404).json({ message: 'No enrollment found' });

      return res.status(200).json(enrollment);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // * localhost:3000/people/studentId/enrollments/
  static async create(req, res) {
    const { studentId } = req.params;
    const newEnrollment = { ...req.body, student_id: studentId };
    try {
      const createdEnrollment = await Enrollment.create(newEnrollment);
      return res.status(201).json(createdEnrollment);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // * localhost:3000/people/studentId/enrollments/enrollmentId
  static async update(req, res) {
    const { studentId, enrollmentId } = req.params;
    const updatedEnrollment = { ...req.body, student_id: studentId };
    try {
      await Enrollment.update(updatedEnrollment, { where: { id: enrollmentId } });
      return res.status(200).json(updatedEnrollment);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // * localhost:3000/people/studentId/enrollments/enrollmentId
  static async delete(req, res) {
    const { studentId, enrollmentId } = req.params;
    try {
      await Enrollment.destroy({ where: { id: enrollmentId, student_id: studentId } });
      return res.status(200).json({ message: 'Enrollment deleted successfully' });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = EnrollmentController;
