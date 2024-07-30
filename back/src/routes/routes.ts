import { Router } from 'express';
import userRouter from './userRoutes';
import reservationRouter from './reservesRoutes';
import { login } from '../controllers/authController';


const router = Router();

router.use('/users', userRouter);
router.use('/reserves', reservationRouter);
router.post('/login', login);


export default router;