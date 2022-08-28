module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize } Sequelize
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Enrollments', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE,
    });
  },

  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize } Sequelize
   */
  async down(queryInterface, _Sequelize) {
    await queryInterface.removeColumn('Enrollments', 'deletedAt');
  },
};
