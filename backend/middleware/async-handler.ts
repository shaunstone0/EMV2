import { Request, Response, NextFunction } from 'express';

const asyncHandler = (function_: any) => (request: Request, response: Response, next: NextFunction) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    Promise.resolve(function_(request, response, next)).catch(next);

export default asyncHandler;
