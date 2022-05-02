import UserModel from "../../models/user.model.js";
export const findUser = async (email) => {
  return await UserModel.findOne({ email: email });
};
export const createUser = async (
  firstName,
  lastName,
  email,
  role,
  hashedPassword,
  googleId,
  id
) => {
  const user = new UserModel({
    firstName,
    lastName,
    email,
    role,
    password: hashedPassword,
    googleId,
    id,
  });

  return user.save();
};
