import { Response, Request, NextFunction } from 'express';
import { User } from '../../../../entities/user/user';
import { getRepository } from 'typeorm';
import asyncHandler from '../../../../middleware/async-handler';
import ErrorResponse from '../../../../utils/error-response/error-response';

const deleteSingleUser = asyncHandler(
    async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        const user = await getRepository(User).findOne(request.params.id);

        if (user && user.id) {
            await getRepository(User).softDelete(user.id);
        }

        if (!user?.id) {
            return next(new ErrorResponse(`no user was found with ${request.params.id}`, 404));
        }

        response.status(200).json({ success: true });
    },
);

export default deleteSingleUser;
