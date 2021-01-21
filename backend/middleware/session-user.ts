import { UserResponse } from '../utils/interfaces/user-response';
import { User } from '../entities/user/user';

const sessionizeUser = (user: User): UserResponse => ({
    email: user.email,
});

export default sessionizeUser;
