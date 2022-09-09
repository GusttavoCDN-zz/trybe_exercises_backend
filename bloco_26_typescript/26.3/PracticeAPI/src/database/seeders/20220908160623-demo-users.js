'use strict';

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          email: 'john@gmail.com',
          password: '123456',
        },
        {
          name: 'Geraldo',
          email: 'geraldolindão@gmail.com',
          password: '123456',
        },
        {
          name: 'Gustavo',
          email: 'otaku@gmail.com',
          password: 'otaku123',
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
