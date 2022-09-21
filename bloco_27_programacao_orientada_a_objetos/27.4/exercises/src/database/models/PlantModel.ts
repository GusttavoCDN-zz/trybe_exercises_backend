import {
  Model,
  DataTypes,
  InferAttributes,
  CreationOptional,
  InferCreationAttributes,
} from 'sequelize';
import { PlantSize } from '../../interfaces/IPlant';
import db from './index';

class Plant extends Model<InferAttributes<Plant>, InferCreationAttributes<Plant>> {
  public id!: CreationOptional<number>;
  public breed!: string;
  public needsSun!: boolean;
  public origin!: string;
  public size!: PlantSize;
}

Plant.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    needsSun: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.ENUM('small', 'medium', 'large'),
      validate: {
        isIn: {
          args: [['small', 'medium', 'large']],
          msg: 'Size must be small, medium or large',
        },
      },
      allowNull: false,
    },
  },
  {
    tableName: 'Plants',
    sequelize: db,
    timestamps: false,
    underscored: true,
    scopes: {
      sunny: {
        where: {
          needsSun: true,
        },
      },
    },
  },
);

export default Plant;
