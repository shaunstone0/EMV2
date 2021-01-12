import express from 'express';
const router = express.Router({ mergeParams: true });
import getAllUsers from '../../../controllers/admin/user/get-all-users';

router.get('/', getAllUsers);

module.exports = router;
