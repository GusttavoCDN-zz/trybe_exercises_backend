/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize } Sequelize
   */
  up: (queryInterface, _Sequelize) =>
    queryInterface.bulkInsert(
      'Levels',
      [
        {
          desc_level: 'básico',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc_level: 'intermediário',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc_level: 'avançado',
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
  down: (queryInterface, _Sequelize) => queryInterface.bulkDelete('Levels', null, {}),
};
