import { CustomError } from "./customError";

export class DatabaseConnError extends CustomError {
    statusCode = 400;

    constructor(public message: string) {
        super(message);

        Object.setPrototypeOf(this, DatabaseConnError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message }];
    }
}
