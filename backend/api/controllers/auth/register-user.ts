import { Response, Request, NextFunction } from 'express';
import { User } from '../../../entities/user/user';
import { getRepository } from 'typeorm';
import ErrorResponse from '../../../utils/error-response/error-response';
import { IUser } from '../../../utils/interfaces/iuser';
import { ValidationService } from '../../services/validation-service';
import { validationMap } from '../../../utils/validation/validation-map';

export class Register {
    public async registerUser(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        const userRepository = getRepository(User);

        const userInputData: IUser = request.body;

        // A new registered user will always default to role_id "user", this can be changed inside admin control panel.
        const entities: IUser = {
            email: userInputData.email,
            password: userInputData.password,
        };

        if (userInputData.role_id) {
            entities['role_id'] = userInputData.role_id;
        }

        if (!Register.validateUser(entities)) {
            return next(new ErrorResponse(`Validation Failed, invalid customer data `, 500));
        }

        // Check if user exists
        const userAlreadyExists = await userRepository.findOne({ email: entities.email });

        if (userAlreadyExists) {
            return next(new ErrorResponse(`User with email ${entities.email} already exists`, 500));
        }

        const user = userRepository.create({
            email: entities.email,
            password: entities.password,
        });
        const savedUser = await userRepository.save(user);

        response.status(200).json({ success: true, data: savedUser });
    }

    public static validateUser(user: IUser): boolean {
        const validEmail = user.email
            ? ValidationService.validateFromMap(user.email, validationMap.user.email())
            : false;

        const validPassword = user.password
            ? ValidationService.validateFromMap(user.password, validationMap.user.password())
            : false;

        return validEmail && validPassword;
    }
}
