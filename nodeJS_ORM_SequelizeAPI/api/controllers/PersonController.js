const { Person } = require('../models');

class PersonController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async getPeople(_req, res) {
    try {
      const people = await Person.findAll();
      return res.status(200).json(people);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async getPerson(req, res) {
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
  static async createPerson(req, res) {
    try {
      const { name, active, email, role } = req.body;
      const person = await Person.create({ name, active, email, role });
      return res.status(201).json(person);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updatePerson(req, res) {
    try {
      const { id } = req.params;
      const { name, active, email, role } = req.body;
      const updatedPerson = await Person.update(
        { name, active, email, role },
        {
          where: { id },
        },
      );
      return res.status(200).json(updatedPerson);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletePerson(req, res) {
    try {
      const { id } = req.params;
      await Person.destroy({ where: { id } });
      res.send(200).json({ message: 'Deleted' });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PersonController;
