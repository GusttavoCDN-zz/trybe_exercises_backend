import { DataTypes , QueryInterface } from 'sequelize';


module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable('Plants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      breed: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      needsSun: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        field: 'needs_sun',
      },
      origin: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      size: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface: QueryInterface, _Sequelize: typeof DataTypes) {
    await queryInterface.dropTable('Plants');
  },
};
