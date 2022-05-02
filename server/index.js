import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { dbConnection } from "./src/utils/dbConnection.js";
import morgan from "morgan";
import helmet from "helmet";
const app = express();
import { userRouter } from "./src/routes/user/user.router.js";
import "dotenv/config";

function main() {
  try {
    app.use(cors());
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(userRouter);

    const port = process.env.PORT;
    app.listen(port, () => {
      console.log(`Listening on port ${port}.`);
      dbConnection();
    });
  } catch (error) {
    console.log(error);
  }
}

main();
