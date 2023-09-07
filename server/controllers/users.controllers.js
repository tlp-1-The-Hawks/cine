import {createUser} from '../models/user_model.js';

export const ctrlCreateUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json('Unexpected error');
  }
};
