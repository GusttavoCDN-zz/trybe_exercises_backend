"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(),
        allowNull: false,
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(),
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: new sequelize_1.DataTypes.STRING(),
        allowNull: false,
    },
}, { timestamps: false, sequelize: index_1.default, modelName: 'Users' });
exports.default = User;
