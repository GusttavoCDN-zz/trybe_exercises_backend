"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class Restaurant extends sequelize_1.Model {
}
Restaurant.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    category: {
        type: new sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    openingTime: {
        type: new sequelize_1.DataTypes.TIME(),
        allowNull: false,
    },
    closingTime: {
        type: new sequelize_1.DataTypes.TIME(),
        allowNull: false,
    },
}, { timestamps: false, sequelize: index_1.default, modelName: 'Restaurants', underscored: true });
exports.default = Restaurant;
