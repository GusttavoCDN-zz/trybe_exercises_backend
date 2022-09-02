const Sequelize = require('sequelize');
const config = require('../config/config.json');
const { Person, Enrollment } = require('../models');
const sequelize = new Sequelize(config.development);

class PersonController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async getAllActive(_req, res) {
    try {
      const people = await Person.findAll();
      return res.status(200).json(people);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getAll(_req, res) {
    try {
      const people = await Person.scope('all').findAll();
      return res.status(200).json(people);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async getOne(req, res) {
    const { id } = req.params;
    try {
      const person = await Person.findByPk(id);
      return res.status(200).json(person);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async getEnrollments(req, res) {
    const { studentId } = req.params;
    try {
      const person = await Person.findByPk(studentId);
      // * Mixin que é criado quando se cria um model associado a outro. Permite a utilização de funções pré criadas.
      const enrollments = await person.getEnrollments();
      console.log(enrollments);
      return res.status(200).json(enrollments);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async create(req, res) {
    try {
      const { name, active, email, role } = req.body;
      const person = await Person.create({ name, active, email, role });
      return res.status(201).json(person);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name, active, email, role } = req.body;
      const updatedPerson = await Person.update(
        { name, active, email, role },
        {
          where: { id },
        }
      );
      return res.status(200).json(updatedPerson);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async cancelStudent(req, res) {
    const { studentId } = req.params;
    try {
      sequelize.transaction(async (t) => {
        await Person.update(
          { active: false },
          { where: { id: studentId } },
          { transaction: t }
        );

        await Enrollment.update(
          { status: 'cancelado' },
          { where: { student_id: studentId } },
          { transaction: t }
        );
      });

      return res.status(200).json({ message: 'Student canceled' });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await Person.destroy({ where: { id } });
      res.status(200).json({ message: 'Deleted' });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restore(req, res) {
    const { id } = req.params;
    try {
      await Person.restore({ where: { id } });
      return res.status(200).json({ message: `${id} restored` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PersonController;
