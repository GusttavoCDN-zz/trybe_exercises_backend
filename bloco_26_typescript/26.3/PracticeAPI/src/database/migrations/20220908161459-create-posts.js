'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING(45),
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING(45),
      },
      publicationDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'publication_date',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  },
};
