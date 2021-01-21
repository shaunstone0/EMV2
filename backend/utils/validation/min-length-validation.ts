export const minLengthValidation = (minLength: number) => (value: string) => !value || value.length < minLength;

export const minLengthAllowEmptyValidation = (minLength: number) => (value: string) => {
    if (value === '') {
        return false;
    }
    return value && value.length < minLength;
};
