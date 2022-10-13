import { Model, DataTypes } from 'sequelize';
import db from './index';

class Book extends Model {
  id!: number;
  title!: string;
  price!: number;
  author!: string;
  isbn!: string;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING(100),
    },
  },
  { sequelize: db, modelName: 'books', timestamps: false }
);

export default Book;
