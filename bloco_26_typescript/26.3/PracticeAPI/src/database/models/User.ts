import { Model, DataTypes } from 'sequelize';
import db from './index';

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
  },
  { timestamps: false, sequelize: db, modelName: 'Users' }
);

export default User;
