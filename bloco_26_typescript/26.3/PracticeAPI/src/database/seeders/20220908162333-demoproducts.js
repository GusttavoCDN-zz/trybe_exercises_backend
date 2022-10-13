'use strict';

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Macbook Pro 16',
          brand: 'Apple',
          price: 10000,
          manufacturing_date: '2021-09-08',
          expiration_date: '2026-10-25',
        },
        {
          name: 'Playstation 5',
          brand: 'Sony',
          price: 5000,
          manufacturing_date: '2018-09-08',
          expiration_date: '2026-08-15',
        },
        {
          name: 'Xbox Series X',
          brand: 'Microsoft',
          price: 5000,
          manufacturing_date: '2019-09-08',
          expiration_date: '2026-08-15',
        },
        {
          name: 'Iphone 7',
          brand: 'Apple',
          price: 2000,
          manufacturing_date: '2014-09-08',
          expiration_date: '2018-08-15',
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
