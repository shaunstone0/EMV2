import ErrorResponse from '../utils/error-response/error-response';
import { Response, Request } from 'express';
import { error } from '../utils/interfaces/ierror';

const errorHandler = (error: error, request: Request, response: Response) => {
    let errors: Error = { ...error };
    console.log(error.stack);

    if (error.name === 'uncaughtException') {
        const message = `Uncaught Exception`;
        errors = new ErrorResponse(message, 500);
    }

    response.status(error.statusCode || 500).json({
        success: false,
        error: errors.message || 'Server Error',
    });
};

export default errorHandler;
