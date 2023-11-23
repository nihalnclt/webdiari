import { CustomError } from "./customError";

export class NotFoundError extends CustomError {
    statusCode = 404;
    reason = "Error connecting to database";

    constructor() {
        super("Error connecting to db");

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors() {
        return [{ message: this.reason }];
    }
}
