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
  try {
    const newcomment = await CommentModel.create({
      title,
      description,
      userId,
      movieId,
    });

    return newcomment;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllComments() {
  try {
    const comments = await CommentModel.findAll({
      include: {
        model: UserModel,
        as: 'User',
        model: MovieModel,
        as: 'Movie',
      },
    });
    return comments;
  } catch (error) {
    console.error('Error al encontrar comentarios');
    throw error;
  }
}

export async function getCommentByid(id) {
  try {
    const comment = await CommentModel.findByPk(id);
    if (!comment) {
      return null;
    }
    return comment;
  } catch (error) {
    console.error('Error al encontrar el comentario');

    throw error;
  }
}

export async function editComment(id, comment) {
  try {
    const commentToEdit = await CommentModel.findByPk(id);
    if (!commentToEdit) {
      return null;
    }
    const commentEdited = await commentToEdit.update(comment);
    return commentEdited;
  } catch (error) {
    console.error('Error al editar el comentario');

    throw error;
  }
}

export async function deleteComment(id) {
  try {
    const comment = await CommentModel.findByPk(id);
    if (!comment) {
      return null;
    }
    await comment.destroy();
    return comment;
  } catch (error) {
    console.error('Error al eliminar el comentario');

    throw error;
  }
}
