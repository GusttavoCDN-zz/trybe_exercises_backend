import { Model, DataTypes, Op } from 'sequelize';
import db from './index';

class Product extends Model {
  public id!: number;
  public name!: string;
  public brand!: string;
  public price!: number;
  public manufacturingDate!: Date;
  public expirationDate!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(250),
      allowNull: false,
    },
    brand: {
      type: new DataTypes.STRING(250),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    manufacturingDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    expirationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    sequelize: db,
    tableName: 'Products',
    underscored: true,
    scopes: {
      withoutExpirated: {
        where: { expirationDate: { [Op.gt]: new Date() } },
      },
    },
  }
);

export default Product;
