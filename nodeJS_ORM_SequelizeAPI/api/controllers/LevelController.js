/* eslint-disable camelcase */
const { Level } = require('../models');

class LevelController {
  static async getAll(req, res) {
    try {
      const levels = await Level.findAll();
      return res.status(200).json(levels);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getOne(req, res) {
    const { id } = req.params;
    try {
      const level = await Level.findByPk(id);
      return res.status(200).json(level);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async create(req, res) {
    const { desc_level } = req.body;
    try {
      const newLevel = await Level.create({ desc_level });
      return res.status(201).json(newLevel);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { desc_level } = req.body;
    try {
      await Level.update({ desc_level }, { where: { id } });
      return res.status(200).json({ message: 'Updated successfully' });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      await Level.destroy({ where: { id } });
      return res.status(200).json({ message: 'Deleted' });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = LevelController;
