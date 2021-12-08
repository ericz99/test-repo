import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '.';

interface CommentData {
  postId: number;
  id: number;
  body: string;
  name: string;
  email: string;
}

interface CommentCreationAttributes extends Optional<CommentData, 'id'> {}

interface CommentInstance extends Model<CommentData, CommentCreationAttributes>, CommentData {
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

const Comments = sequelize.define<CommentInstance>(
  'Comments',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID
    },
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    body: {
      allowNull: false,
      type: DataTypes.STRING
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true
  }
);

export default Comments;
