/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes } DataTypes
 */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enrollments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
      },
      student_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'People', key: 'id' },
      },
      class_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Classes', key: 'id' },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Enrollments');
  },
};
