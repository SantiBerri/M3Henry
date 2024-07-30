"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservesControllers_1 = require("../controllers/reservesControllers");
const router = (0, express_1.Router)();
const reservationController = new reservesControllers_1.ReservationController();
// Ruta para crear una nueva reservación
router.post('/', reservationController.createReservation);
// Ruta para obtener una reservación por su ID
router.get('/:id', reservationController.getReservationById);
// Ruta para actualizar una reservación por su ID
router.put('/:id', reservationController.updateReservation);
// Ruta para eliminar una reservación por su ID
router.delete('/:id', reservationController.deleteReservation);
exports.default = router;
//# sourceMappingURL=reservesRoutes.js.map