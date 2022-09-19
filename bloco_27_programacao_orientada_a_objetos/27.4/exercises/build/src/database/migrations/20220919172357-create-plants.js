"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    async up(queryInterface, Sequelize) {
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
    async down(queryInterface, _Sequelize) {
        await queryInterface.dropTable('Plants');
    },
};
