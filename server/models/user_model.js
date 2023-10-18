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
    cinemaId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    timestamps: true,
  }
);

// Servicios

export async function createUser(user) {
  const passwordHashed = await hashString(user.password);

  user.password = passwordHashed;
  const newUser = await UserModel.create(user);

  return newUser;
}

export async function getAllUsers() {
  const users = await UserModel.findAll();
  return users;
}

export async function getUserById(userId) {
  const user = await UserModel.findByPk(userId);
  if (!user) {
    return null;
  }
  return user;
}

export async function deleteUserById(userId) {
  const user = await UserModel.findByPk(userId);
  if (!user) {
    return null;
  }
  await user.destroy();
  return user;
}

export async function updateUser(userId, user) {
  const userToUpdate = await UserModel.findByPk(userId);
  if (!userToUpdate) {
    return null;
  }
  const updatedUser = await UserModel.update(user);
  return updatedUser;
}

export async function getUserByEmailAndPassword({ email, password }) {
  const user = await UserModel.findOne({ where: { email } });
  if (!user) {
    return null;
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return null;
  }
  return user;
}
