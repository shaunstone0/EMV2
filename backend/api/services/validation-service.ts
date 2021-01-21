import ErrorResponse from '../../utils/error-response/error-response';
import { Util } from './util';
import { IUser } from '../../utils/interfaces/iuser';
import { validationMap } from '../../utils/validation/validation-map';

export class ValidationService {
    public static async validate(validator: string, value: string, parameter: number | undefined): Promise<boolean> {
        return import(`../../../shared/validation/${validator}`)
            .then((validationLoader) => {
                const validationMethod = Util.toCamelCase(validator);

                if (validationLoader[validationMethod] === undefined) {
                    throw new ErrorResponse(`Expected validation method "${validationMethod}" not found`, 500);
                }

                if (parameter === undefined) {
                    return !validationLoader[validationMethod]()(value);
                }

                return !validationLoader[validationMethod](parameter)(value);
            })
            .catch((error) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                throw new ErrorResponse(error.message, 500);
            });
    }

    public static validateFromMap(value: string | undefined, validationMap: object[]): boolean {
        if (value === undefined) {
            return false;
        }

        for (const validator of validationMap) {
            if (typeof validator === 'function' && validator(value) === true) {
                return false;
            }
        }

        return true;
    }
}

export default new ValidationService();
