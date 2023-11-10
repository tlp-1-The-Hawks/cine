import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';
import { UserModel } from './user_model.js';
import { MovieModel } from './movie_model.js';

export const CommentModel = sequelize.define(
  'Comment',
  {
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
export async function addcomment(comment, userId, movieId) {
  const newcomment = await CommentModel.create({
    description: comment,
    userId: userId,
    movieId: movieId,
  });

  return newcomment;
}

export async function getAllComments() {
  const comments = await CommentModel.findAll({
    include: [
      {
        model: UserModel
      }
    ],
  });
  return comments;
}

export async function getCommentByid(movieId) {
  const comment = await CommentModel.findAll({
    where: {
      movieId: movieId
    },
    include: {
      model: UserModel
    }
  });
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
