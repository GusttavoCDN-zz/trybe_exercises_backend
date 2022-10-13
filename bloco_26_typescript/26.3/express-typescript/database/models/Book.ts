import {
  Model,
  DataTypes,
  InferAttributes,
  CreationOptional,
  InferCreationAttributes,
} from 'sequelize';
import db from './index';

class Book extends Model<InferAttributes<Book>, InferCreationAttributes<Book>> {
  public id!: CreationOptional<number>;
  public title!: string;
  public price!: number;
  public author!: string;
  public isbn!: string;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      allowNull: false,
      type: new DataTypes.STRING(30),
    },
    price: {
      allowNull: false,
      type: new DataTypes.DECIMAL(10, 2),
    },
    author: {
      allowNull: false,
      type: new DataTypes.STRING(30),
    },
    isbn: {
      allowNull: false,
      type: new DataTypes.STRING(30),
    },
  },
  { tableName: 'books', sequelize: db, timestamps: false }
);

export default Book;
