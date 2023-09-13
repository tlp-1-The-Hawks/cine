import {sequelize} from '../config/database.js';
import {DataTypes} from 'sequelize';
import {hashString} from '../helpers/hash.js';
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
  try {
    const hashedPassword = await hashString(user.password);

    const newUser = await UserModel.create({...user, password: hashedPassword});
    return newUser;
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    throw error;
  }
}

export async function getAllUsers() {
  return (await UserModel.findAll()) ?? null;
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
  const userDeleted = user.destroy();
  return userDeleted;
}

export async function updateUser(userId, user) {
  const editUser = await UserModel.findByPk(userId);

  editUser.update(user);
  return editUser;
}

export async function getUserByEmailAndPassword({email, password}) {
  const user = await UserModel.findOne({where: {email}});

  if (!user) {
    return null;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return null;
  }

  return user;
}
