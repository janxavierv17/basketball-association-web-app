import jwt from "jsonwebtoken";
import "dotenv/config";

export const verifyToken = (request, response, next) => {
  const token = request.cookies.access_token;
  if (!token) {
    return response.status(401).json({
      message: "Unable to authenticate user. Please contact the admin.",
    });
  } else {
    jwt.verify(token, process.env.secret, (err, user) => {
      console.log(user);
      if (err) {
        return response.status(403).json({ message: "Token is not valid." });
      } else {
        request.user = user;
        next();
      }
    });
  }
};

export const tokenController = (request, response, next) => {
  return response.send("Successfully verified token & logged in.");
};

export const verifyUser = (request, response, next) => {
  verifyToken(request, response, () => {
    // this request.user.id came from the above code at verify token "request.user = user"
    if (request.user.id === request.params.id || request.user.isAdmin) {
      next();
    } else {
      return response
        .status(403)
        .json({ message: "Your account is not authorized." });
    }
  });
};

export const verifyAdmin = (request, response, next) => {
  verifyToken(request, response, () => {
    if (request.user.isAdmin) {
      next();
    } else {
      return response
        .status(403)
        .json({ message: "You don't have admin access for this route." });
    }
  });
};

export const verifyUserHandler = (request, response, next) => {
  return response.json({ message: "Successfully verified and logged in." });
};
