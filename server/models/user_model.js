import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';
import { hashString } from '../helpers/hash.js';
import bcrypt from 'bcrypt';

export const UserModel = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// Servicios

export async function createUser(user) {
  const passwordHashed = await hashString(user.password);
  user.password = passwordHashed;
  try {
    const newUser = await UserModel.create(user);

    return newUser;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllUsers() {
  try {
    const users = await UserModel.findAll();
    return users;
  } catch (error) {
    console.error('Error al encontrar usuarios');
    throw error;
  }
}

export async function getUserById(userId) {
  try {
    const user = await UserModel.findByPk(userId);
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    console.error('Error al encontrar usuario');
    throw error;
  }
}

export async function deleteUserById(userId) {
  try {
    const user = await UserModel.findByPk(userId);
    if (!user) {
      return null;
    }
    await user.destroy();
    return user;
  } catch (error) {
    console.error('Error al eliminar usuario');
    throw error;
  }
}

export async function updateUser(userId, user) {
  try {
    const userToUpdate = await UserModel.findByPk(userId);
    if (!userToUpdate) {
      return null;
    }
    const updatedUser = await UserModel.update(user);
    return updatedUser;
  } catch (error) {
    console.error('Error al actualizar usuario');
    throw error;
  }
}

export async function getUserByEmailAndPassword({ email, password }) {
  try {
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      return null;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }
    return user;
  } catch (error) {
    console.error('Error al encontrar usuario');
    throw error;
  }
}
