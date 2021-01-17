import express from 'express';
const router = express.Router({ mergeParams: true });
import { Register } from '../../controllers/auth/register-user';

const register: Register = new Register();

router.post('/', register.registerUser);
module.exports = router;
