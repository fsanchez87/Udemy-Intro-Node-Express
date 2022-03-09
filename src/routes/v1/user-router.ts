import { Router } from 'express';

import * as userController from '../../controllers/v1/users-controller';

const router = Router();

router.get('', userController.getUsers);
router.post('/create', userController.createUser);
router.get('/:userId', userController.getUserById);
router.delete('/:userId', userController.deleteById);
router.post('/login', userController.login);

export default router; 