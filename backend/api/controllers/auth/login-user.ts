import { Response, Request, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../../../entities/user/user';
import ErrorResponse from '../../../utils/error-response/error-response';
import { IUser } from '../../../utils/interfaces/iuser';
import sessionizeUser from '../../../middleware/session-user';
import { SessionData } from 'express-session';
import asyncHandler from '../../../middleware/async-handler';

export class Login {
    public loginUser = asyncHandler(
        async (request: Request, response: Response, next: NextFunction): Promise<Response | void | SessionData> => {
            const userRepository = getRepository(User);

            const userInputData: IUser = request.body;

            const entities: IUser = {
                email: userInputData.email,
                password: userInputData.password,
            };

            if (!entities.email || !entities.password) {
                return next(new ErrorResponse('Invalid Credentials', 400));
            }

            const user = await userRepository
                .createQueryBuilder('user')
                .where('user.email= :email', { email: entities.email })
                .addSelect('user.password')
                .getOne();

            if (user) {
                const isMatch = user.matchPassword(user.password);
                if (user && isMatch) {
                    const sessionUser = sessionizeUser(user);
                    request.session.user = sessionUser;
                    response.status(200).json({ success: true, data: sessionUser });
                }
            }
        },
    );
}
