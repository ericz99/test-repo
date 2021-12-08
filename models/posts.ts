import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '.';

interface PostData {
  userId: number;
  id: number;
  body: string;
  title: string;
}

interface PostCreationAttributes extends Optional<PostData, 'id'> {}

interface PostInstance extends Model<PostData, PostCreationAttributes>, PostData {
  createdAt?: Date;
  updatedAt?: Date;
}

const Post = sequelize.define<PostInstance>(
  'Posts',
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      unique: true,
      type: DataTypes.UUID
    },
    userId: {
      allowNull: false,
      type: DataTypes.NUMBER
    },
    body: {
      allowNull: false,
      type: DataTypes.STRING
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true,
    paranoid: true
  }
);

export default Post;
