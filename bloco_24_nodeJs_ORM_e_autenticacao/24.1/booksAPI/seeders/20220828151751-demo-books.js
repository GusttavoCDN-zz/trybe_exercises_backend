/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize } Sequelize
   */
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Game of Thrones',
        author: 'George R.R. Martin',
        page_quantity: 900,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'A Clash of Kings',
        author: 'George R.R. Martin',
        page_quantity: 1050,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: '21 lições para o seculo 21',
        author: 'Yuval Harari',
        page_quantity: 432,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize } Sequelize
   */
  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
