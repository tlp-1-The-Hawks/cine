import bcrypt from 'bcrypt';

export const hashString = async (text) => {
  return await bcrypt.hash(text, 10);
};
