import IncorrectRequest from "./incorrectRequest.error.js";

class ValidationError extends IncorrectRequest {
  constructor(error) {
    const errorsMessages = Object.values(error.errors).map(errorMessage => errorMessage.message).join("; ");
    super(`The following errors have been identified: ${errorsMessages}`);
  }
}

export default ValidationError;