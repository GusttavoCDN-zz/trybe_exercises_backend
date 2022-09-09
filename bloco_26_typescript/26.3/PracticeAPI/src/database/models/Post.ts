import { Model, DataTypes } from 'sequelize';
import db from './index';

class Post extends Model {
  public id!: number;
  public title!: string;
  public author!: string;
  public category!: string;
  public publicationDate!: Date;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    author: {
      type: new DataTypes.STRING(45),
      allowNull: false,
    },
    category: {
      type: new DataTypes.STRING(45),
      allowNull: false,
    },
    publicationDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  { timestamps: false, sequelize: db, modelName: 'Posts', underscored: true }
);

export default Post;
