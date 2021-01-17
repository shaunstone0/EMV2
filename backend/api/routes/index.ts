import express from 'express';
const router = express.Router({ mergeParams: true });
const userRouter = require('./admin/user/user-routes');
const authRouter = require('./auth/register-user');

router.use('/admin/users', userRouter);
router.use('/auth/register', authRouter);
export default router;
