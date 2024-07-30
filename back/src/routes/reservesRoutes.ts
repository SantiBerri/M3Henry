import { Router } from 'express';
import { ReservationController } from '../controllers/reservesControllers';

const router = Router();
const reservationController = new ReservationController();

router.post('/', reservationController.createReservation);
router.get('/:id', reservationController.getReservationById);
router.put('/:id', reservationController.updateReservation);
router.delete('/:id', reservationController.deleteReservation);

export default router;