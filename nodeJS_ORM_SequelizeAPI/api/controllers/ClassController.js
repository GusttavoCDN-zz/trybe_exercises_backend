/* eslint-disable camelcase */
const { Class, Enrollment } = require('../models');
const { Op } = require('sequelize');

class ClassController {
  static async getAll(req, res) {
    const { start_date, final_date } = req.query;
    const where = {};
    if (start_date || final_date) where['start_date'] = {};
    if (start_date) where['start_date'][Op.gte] = start_date;
    if (final_date) where['start_date'][Op.lte] = final_date;

    try {
      const classes = await Class.findAll({ where });
      return res.status(200).json(classes);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getOne(req, res) {
    const { id } = req.params;
    try {
      // eslint-disable-next-line no-underscore-dangle
      const _class = await Class.findByPk(id);
      return res.status(200).json(_class);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async create(req, res) {
    const { start_date, teacher_id, level_id } = req.body;
    try {
      const newClass = await Class.create({ start_date, teacher_id, level_id });
      return res.status(201).json(newClass);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { teacher_id, level_id } = req.body;
    try {
      await Class.update({ teacher_id, level_id }, { where: { id } });
      return res.status(200).json({ message: 'Updated successfully' });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      await Class.destroy({ where: { id } });
      return res.status(200).json({ message: 'Deleted' });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = ClassController;
