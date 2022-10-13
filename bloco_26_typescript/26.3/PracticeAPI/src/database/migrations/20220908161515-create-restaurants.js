'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').DataTypes} Sequelize
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING(45),
      },
      openingTime: {
        allowNull: false,
        type: Sequelize.TIME,
        field: 'opening_time',
      },
      closingTime: {
        allowNull: false,
        type: Sequelize.TIME,
        field: 'closing_time',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Restaurants');
  },
};
