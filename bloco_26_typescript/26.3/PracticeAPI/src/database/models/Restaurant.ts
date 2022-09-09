import { Model, DataTypes, Op, Sequelize } from 'sequelize';
import db from './index';

class Restaurant extends Model {
  public id!: number;
  public name!: string;
  public category!: string;
  public openingTime!: string; // 10:00
  public closingTime!: string; // 22:00
}

Restaurant.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    category: {
      type: new DataTypes.STRING(45),
      allowNull: false,
    },
    openingTime: {
      type: new DataTypes.TIME(),
      allowNull: false,
    },
    closingTime: {
      type: new DataTypes.TIME(),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    sequelize: db,
    tableName: 'Restaurants',
    underscored: true,
  }
);

export default Restaurant;
