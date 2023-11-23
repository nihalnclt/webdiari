import { CustomError } from "./customError";

export class DatabaseConnError extends CustomError {
    statusCode = 400;
    reason = "Error connecting to database";

    constructor() {
        super("Error connecting to db");

        Object.setPrototypeOf(this, DatabaseConnError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message }];
    }
}
