import express from 'express';
import { Register } from '../../controllers/auth/register-user';
import { Login } from '../../controllers/auth/login-user';
const router = express.Router({ mergeParams: true });
const register: Register = new Register();
const login = new Login();

// eslint-disable-next-line @typescript-eslint/unbound-method
router.post('/register', register.registerUser);
router.get('/login', login.loginUser);
module.exports = router;
