import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { findUser, createUser } from "../../service/user/user.service.js";
import { errorLogger } from "../../utils/logger.js";
export const signin = async (request, response) => {
  const { email, password } = request.body;
  try {
    const user = await findUser(email);
    if (!user)
      return response.status(404).json({
        message:
          "This email doesn't exist. Please register first before logging in.",
      });

    const authenticatedUser = await bcrypt.compare(password, user.password);
    if (authenticatedUser) {
      const token = jwt.sign(
        {
          email: user.email,
          id: user._id,
          role: user.role,
          isAdmin: user.isAdmin,
        },
        process.env.secret,
        { expiresIn: "1hr" }
      );
      const { password, isAdmin, ...otherDetails } = user._doc;
      return response
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ message: "Successfully logged in.", ...otherDetails });
    } else {
      return response.status(400).json({
        message:
          "Unsuccessful log in. Either email address doesn't exist or the password you've entered is not correct.",
      });
    }
  } catch (error) {
    const errors = errorLogger(error.message);
    return response.status(400).send({ message: errors });
  }
};
export const signup = async (request, response) => {
  const { firstName, lastName, email, role, password, googleId, id } =
    request.body;
  try {
    const userExist = await findUser(email);
    if (userExist) {
      return response.status(400).json({
        message:
          "Your email address already exist. Please use a different email address or reset your password.",
      });
    }
    if (!password) {
      return response.status(400).json({
        message: { password: "Please enter a password." },
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await createUser(
      firstName,
      lastName,
      email,
      role,
      hashedPassword,
      googleId,
      id
    );
    console.log(user);
    return response.status(201).json({ message: " Registered successfully." });
  } catch (error) {
    const errors = errorLogger(error.message);
    return response.status(400).send({ message: errors });
  }
};
