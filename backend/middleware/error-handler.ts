import ErrorResponse from '../utils/error-response/error-response';
import { Response, Request } from 'express';
import { error } from '../utils/interfaces/ierror';

const errorHandler = (error: error, request: Request, response: Response) => {
    console.log(error.stack);

    response.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error',
    });
};

export default errorHandler;
