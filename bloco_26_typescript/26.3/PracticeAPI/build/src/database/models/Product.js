"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(250),
        allowNull: false,
    },
    brand: {
        type: new sequelize_1.DataTypes.STRING(250),
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    manufacturingDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    expirationDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: false,
    sequelize: index_1.default,
    modelName: 'Products',
    underscored: true,
    defaultScope: {
        where: {
            expirationDate: {
                [sequelize_1.Op.lt]: new Date(),
            },
        },
    },
});
exports.default = Product;
