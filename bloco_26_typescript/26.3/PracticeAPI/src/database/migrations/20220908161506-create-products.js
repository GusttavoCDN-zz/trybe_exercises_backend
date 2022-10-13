'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(250),
      },
      brand: {
        allowNull: false,
        type: Sequelize.STRING(250),
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      manufacturingDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'manufacturing_date',
      },
      expirationDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'expiration_date',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  },
};
