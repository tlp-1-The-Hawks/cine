import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUser,
} from '../models/user_model.js';

export const ctrlGetAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();

    if (!users) {
      return res.sendStatus(404);
    }

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json('Unexpected error');
  }
};

export const ctrlGetOneUser = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      return res.sendStatus(404);
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json('Unexpected error');
  }
};

export const ctrlCreateUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json('Unexpected error');
  }
};

export const ctrlDeleteUser = async (req, res) => {
  try {
    const user = await deleteUserById(req.params.id);
    if (!user) {
      res.sendStatus(404);
    }
    res.sendStatus(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

export const ctrlUpdateUser = async (req, res) => {
  try {
    const user = req.body;
    const userUpdated = await updateUser(req.params.id, user);
    return res.status(200).json({
      message: 'User edited',
      userUpdated,
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json('Unexpected error');
  }
};
