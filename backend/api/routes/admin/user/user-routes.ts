import express from 'express';
const router = express.Router({ mergeParams: true });
import getAllUsers from '../../../controllers/admin/user/get-all-users';
import getUserById from '../../../controllers/admin/user/get-user-by-id';
import deleteSingleUser from '../../../controllers/admin/user/delete-user-by-id';

router.get('/', getAllUsers);
router.get('/:id', getUserById);

router.delete('/:id', deleteSingleUser);

module.exports = router;
