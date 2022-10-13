"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class Post extends sequelize_1.Model {
}
Post.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: new sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    author: {
        type: new sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    category: {
        type: new sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    publicationDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, { timestamps: false, sequelize: index_1.default, modelName: 'Posts', underscored: true });
exports.default = Post;
