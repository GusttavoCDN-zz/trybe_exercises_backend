'use strict';

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize } Sequelize
   */
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
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
      {}
    );
  },

  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize } Sequelize
   */
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Classes', null, {});
  },
};
