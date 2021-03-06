import { Response, Request, NextFunction } from 'express';
import { User } from '../../../../entities/user/user';
import { getRepository } from 'typeorm';
import asyncHandler from '../../../../middleware/async-handler';
import ErrorResponse from '../../../../utils/error-response/error-response';

const getUserById = asyncHandler(
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        const user = await getRepository(User).findOne(request.params.id);

        if (!user?.id) {
            return next(new ErrorResponse(`No user was found with id of ${request.params.id}`, 404));
        }

        response.status(200).json({ success: true, data: user });
    },
);

export default getUserById;
