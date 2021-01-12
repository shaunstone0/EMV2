import express from 'express';
const router = express.Router({ mergeParams: true });
const userRouter = require('./admin/user/user-routes');

router.use('/admin/users', userRouter);

export default router;
