import express from 'express';
const router = express.Router({ mergeParams: true });
const userRouter = require('./admin/user/user-routes');
const authRouter = require('./auth/auth-routes');

router.use('/admin/users', userRouter);
router.use('/auth', authRouter);
export default router;
