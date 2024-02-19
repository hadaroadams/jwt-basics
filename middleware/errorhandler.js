const { CustomError } = require("./../errors/index");
const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    console.log(err)
    return res.status(err.status).json({ mes: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("something went wrong");
};

module.exports = errorHandler