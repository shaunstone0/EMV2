import { Response, Request, NextFunction } from 'express';
import { User } from '../../../../entities/user/user';
import { getRepository } from 'typeorm';
import asyncHandler from '../../../../middleware/async-handler';
import ErrorResponse from '../../../../utils/error-response/error-response';

const getAllUsers = asyncHandler(
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        const users = await getRepository(User).findOne();

        if (!users?.id) {
            return next(new ErrorResponse('no users were found', 404));
        }
        response.status(200).json({ success: true, data: users });
    },
);

export default getAllUsers;
