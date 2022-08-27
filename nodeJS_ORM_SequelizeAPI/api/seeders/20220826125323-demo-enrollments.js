/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize } Sequelize
   */
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Enrollments',
      [
        {
          status: 'confirmado',
          student_id: 1,
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: 'confirmado',
          student_id: 2,
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: 'confirmado',
          student_id: 3,
          class_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: 'confirmado',
          student_id: 4,
          class_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: 'cancelado',
          student_id: 1,
          class_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: 'cancelado',
          student_id: 2,
          class_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize } Sequelize
   */
  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Enrollments', null, {});
  },
};
