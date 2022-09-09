'use strict';

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'Post 1',
        author: 'John Doe',
        category: 'Tecnologia',
        publication_date: new Date(),
      },
      {
        title: 'Post 2',
        author: 'Geraldo',
        category: 'Tecnologia',
        publication_date: new Date(),
      },
      {
        title: 'Post 3',
        author: 'Gustavo',
        category: 'Animes',
        publication_date: '2021-09-08',
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
