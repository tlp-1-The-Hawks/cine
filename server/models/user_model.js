import {sequelize} from '../config/database.js';
import {DataTypes} from 'sequelize';

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

export async function getAllUsers() {
  return (await UserModel.findAll()) ?? null;
}

export async function createUser(user) {
  return await UserModel.create(user);
}

export async function getUserById(userID) {
  return (await UserModel.findById(userID)) ?? null;
}
