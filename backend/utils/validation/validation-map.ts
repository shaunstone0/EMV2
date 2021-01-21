import { maxLengthValidation } from './max-length-validation';
import { minLengthValidation } from './min-length-validation';
import { patternValidation } from './pattern-validation';
import { emailPattern } from './pattern';
import { requiredValidation } from './required-validation';
import { lettersWithUmlauts } from './transliteration';

export const validationMap = {
    user: {
        email: (): any => [
            maxLengthValidation(50),
            minLengthValidation(1),
            patternValidation(emailPattern),
            requiredValidation,
        ],
        password: (): any => [maxLengthValidation(30), minLengthValidation(6), requiredValidation],
    },
};
