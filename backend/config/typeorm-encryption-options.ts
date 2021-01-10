import { EncryptedColumnOptions } from 'typeorm-encrypted-column';

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY as string;
const ENCRYPTION_ALGORITHM = process.env.ENCRYPTION_ALGORITHM as string;
const ENCRYPTION_IV_LENGTH = Number(process.env.ENCRYPTION_IV_LENGTH);

const encryptionOptions: EncryptedColumnOptions = {
    encrypt: {
        key: ENCRYPTION_KEY,
        algorithm: ENCRYPTION_ALGORITHM,
        ivLength: ENCRYPTION_IV_LENGTH,
        looseMatching: false,
    },
};

export = encryptionOptions;
