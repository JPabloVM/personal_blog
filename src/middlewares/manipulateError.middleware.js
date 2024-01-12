import mongoose from "mongoose";
import BasicError from "../errors/basic.error.js";
import IncorrectRequest from "../errors/incorrectRequest.error.js";
import ValidationError from "../errors/validation.error.js";

// eslint-disable-next-line no-unused-vars
function manipulateError(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    new IncorrectRequest().sendResponse(res);
  }
  else if (error instanceof mongoose.Error.ValidationError) {
    new ValidationError(error).sendResponse(res);
  }
  else if (error instanceof BasicError) {
    error.sendResponse(res);
  } else {
    new BasicError().sendResponse(res);
  }
}

export default manipulateError;