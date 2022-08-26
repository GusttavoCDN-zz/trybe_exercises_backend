const { Person } = require('../models');

class PersonController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static getPeople = async (req, res) => {
    try {
      const people = await Person.findAll();
      return res.status(200).json(people);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static getPerson = async (req, res) => {
    const { id } = req.params;
    try {
      const person = await Person.findByPk(id);
      return res.status(200).json(person);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static createPerson = async (req, res) => {
    try {
      const { name, active, email, role } = req.body;
      const person = await Person.create({ name, active, email, role });
      return res.status(201).json(person);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

  static updatePerson = async (req, res) => {
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
  };

  static deletePerson = async (req, res) => {
    try {
      const { id } = req.params;
      await Person.destroy({ where: { id } });
      res.send(200).json({ message: 'Deleted' });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
}

module.exports = PersonController;
