import { QueryInterface, DataTypes, WhereOptions } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, _Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert('Plants', [
      {
        breed: 'Aloe Vera',
        needs_sun: false,
        origin: 'Africa',
        size: 'small',
      },
      {
        breed: 'Monstera',
        needs_sun: true,
        origin: 'South America',
        size: 'medium',
      },
      {
        breed: 'Ficus',
        needs_sun: true,
        origin: 'South America',
        size: 'medium',
      },
      {
        breed: 'Snake Plant',
        needs_sun: false,
        origin: 'South Africa',
        size: 'medium',
      },
      {
        breed: 'Pothos',
        needs_sun: true,
        origin: 'South America',
        size: 'medium',
      },
      {
        breed: 'Spider Plant',
        needs_sun: true,
        origin: 'South Africa',
        size: 'medium',
      },
      {
        breed: 'Palm',
        needs_sun: true,
        origin: 'Africa',
        size: 'large',
      },
      {
        breed: 'Bromelia',
        needs_sun: false,
        origin: 'South America',
        size: 'medium',
      },
      {
        breed: 'Orquidea',
        needs_sun: true,
        origin: 'South America',
        size: 'small',
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete('Plants', {}, {});
  },
};
