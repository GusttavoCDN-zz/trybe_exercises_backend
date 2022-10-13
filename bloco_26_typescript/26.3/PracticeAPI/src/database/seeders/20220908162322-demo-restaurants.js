'use strict';

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Restaurants',
      [
        {
          name: 'Los Pollos Hermanos',
          category: 'Fast Food',
          opening_time: '10:00:00',
          closing_time: '22:00',
        },
        {
          name: 'McDonalds',
          category: 'Fast Food',
          opening_time: '10:00',
          closing_time: '22:00',
        },
        {
          name: 'Burger King',
          category: 'Fast Food',
          opening_time: '08:00',
          closing_time: '22:00',
        },
        {
          name: 'Central Perk',
          category: 'Coffee House',
          opening_time: '07:00',
          closing_time: '23:00',
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Restaurants', null, {});
  },
};
