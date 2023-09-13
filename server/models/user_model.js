import {sequelize} from '../config/database.js';
import {DataTypes} from 'sequelize';
import {hashString} from '../helpers/hash.js';

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
  try {
    const hashedPassword = await hashString(user.password);

    const newUser = await UserModel.create({...user, password: hashedPassword});
    return newUser;
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    throw error;
  }
}
