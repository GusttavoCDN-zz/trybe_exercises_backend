/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-lines-per-function */
/* eslint-disable camelcase */
module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize } Sequelize
   */
  up: (queryInterface, _Sequelize) =>
    queryInterface.bulkInsert(
      'Classes',
      [
        {
          start_date: '2020-02-01',
          teacher_id: 6,
          level_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start_date: '2020-02-01',
          teacher_id: 5,
          level_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start_date: '2020-02-01',
          teacher_id: 6,
          level_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start_date: '2020-07-01',
          teacher_id: 6,
          level_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    ),

  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize } Sequelize
   */
  down: (queryInterface, _Sequelize) => queryInterface.bulkDelete('Classes', null, {}),
};
