const { Person } = require('../models');

class PersonController {
  /**
   *
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
}

module.exports = PersonController;
