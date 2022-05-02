import logger from "pino";
import dayjs from "dayjs";
import "dotenv/config";
const level = process.env.LOG_LEVEL;
export const log = logger({
  transport: {
    target: "pino-pretty",
  },
  level,
  base: {
    pid: false,
  },
  timestamp: () => `,"time": "${dayjs().format()}"`,
});

export const errorLogger = (error) => {
  let errors = {};
  const allErrors = error.substring(error.indexOf(":") + 1).trim();
  const allErrorsInArray = allErrors.split(",").map((err) => err.trim());
  allErrorsInArray.forEach((error) => {
    const [key, value] = error.split(":").map((err) => err.trim());
    errors[key] = value;
  });

  return errors;
};
