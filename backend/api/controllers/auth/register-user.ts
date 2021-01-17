import { Response, Request, NextFunction } from 'express';
import asyncHandler from '../../../middleware/async-handler';
import { User } from '../../../entities/user/user';
import { getRepository } from 'typeorm';
import ErrorResponse from '../../../utils/error-response/error-response';
import { IUser } from '../../../utils/interfaces/iuser';

// const register = asyncHandler(async (request: Request, response: Response, next: NextFunction): Promise<void> => {});
//
// export default register;

export class Register {
    public async registerUser(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        const userInputData: IUser = request.body;

        // A new registered user will always default to role_id "user", this can be changed inside admin control panel.
        const entities: IUser = {
            email: userInputData.email,
            password: userInputData.password,
            role_id: userInputData.role_id,
            profile_id: userInputData.profile_id,
        };

        const userAlreadyExists = await getRepository(User).findOne({ email: entities.email });

        if (userAlreadyExists) {
            return next(new ErrorResponse(`User with email ${entities.email} already exists`, 500));
        }

        const user = getRepository(User).create(request.body);
        const savedUser = await getRepository(User).save(user);

        response.status(200).json({ success: true, data: savedUser });
    }
}
