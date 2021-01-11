module.exports = {
    clearMocks: true,
    maxWorkers: 1,
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
        '**/tests/**/*.[jt]s?(x)',
        '!**/tests/config/**',
        '!**/tests/utils/**',
        '!**/tests/images/**',
        '**/tests/middleware/**',
    ],
};
