import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';
import { UserModel } from './user_model.js';
import { MovieModel } from './movie_model.js';

export const CommentModel = sequelize.define(
  'Comment',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

//services
export async function addcomment(title, description, userId, movieId) {
  const newcomment = await CommentModel.create({
    title,
    description,
    userId,
    movieId,
  });

  return newcomment;
}

export async function getAllComments() {
  const comments = await CommentModel.findAll({
    include: [
      {
        model: MovieModel
      },
      {
        model: UserModel
      }
    ],
  });
  return comments;
}

export async function getCommentByid(id) {
  const comment = await CommentModel.findByPk(id);
  if (!comment) {
    return null;
  }
  return comment;
}

export async function editComment(id, comment) {
  const commentToEdit = await CommentModel.findByPk(id);
  if (!commentToEdit) {
    return null;
  }
  const commentEdited = await commentToEdit.update(comment);
  return commentEdited;
}

export async function deleteComment(id) {
  const comment = await CommentModel.findByPk(id);
  if (!comment) {
    return null;
  }
  await comment.destroy();
  return comment;
}
