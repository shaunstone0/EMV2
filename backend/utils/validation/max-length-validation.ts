export const maxLengthValidation = (maxLength: number) => (value: string) => value && value.length > maxLength;

export const maxLengthAllowEmptyValidation = (maxLength: number) => (value: string) => {
    if (value === '') {
        return false;
    }
    return value && value.length > maxLength;
};
