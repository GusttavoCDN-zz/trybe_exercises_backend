const { Person } = require('../models');

class PersonController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static getPeople = async (req, res) => {
    try {
      const people = await Person.findAll();
      console.log(people);
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
}

module.exports = PersonController;
