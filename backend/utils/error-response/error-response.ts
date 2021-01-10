class ErrorResponse extends Error {
    private statusCode: number;
    constructor(message: string | undefined, statusCode: number) {
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}

export default ErrorResponse;
