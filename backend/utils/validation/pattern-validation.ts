export const patternValidation = (pattern: string | RegExp) => {
  const regexp = new RegExp(pattern);
  return (value: string) => !value || !regexp.test(value);
};
