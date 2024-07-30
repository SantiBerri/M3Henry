"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationController = exports.ReservationController = void 0;
const reservationService_1 = require("../services/reservationService");
class ReservationController {
    reservationService;
    constructor() {
        this.reservationService = new reservationService_1.ReservationService();
    }
    createReservation = async (req, res) => {
        try {
            const { userId, fecha, hora, motivo, cantidadPersonas, solicitud } = req.body;
            const newReservation = await this.reservationService.createReservation(userId, fecha, hora, motivo, cantidadPersonas, solicitud);
            return res.status(201).json(newReservation);
        }
        catch (error) {
            return this.handleError(res, error);
        }
    };
    getReservationById = async (req, res) => {
        try {
            const reservationId = parseInt(req.params.id);
            const reservation = await this.reservationService.getReservationById(reservationId);
            if (!reservation) {
                return res.status(404).json({ message: 'Reservation not found' });
            }
            return res.status(200).json(reservation);
        }
        catch (error) {
            return this.handleError(res, error);
        }
    };
    updateReservation = async (req, res) => {
        try {
            const reservationId = parseInt(req.params.id);
            const updateReservationDto = req.body;
            const updatedReservation = await this.reservationService.updateReservation(reservationId, updateReservationDto);
            return res.status(200).json(updatedReservation);
        }
        catch (error) {
            return this.handleError(res, error);
        }
    };
    deleteReservation = async (req, res) => {
        try {
            const reservationId = parseInt(req.params.id);
            await this.reservationService.deleteReservation(reservationId);
            return res.status(204).send();
        }
        catch (error) {
            return this.handleError(res, error);
        }
    };
    handleError(res, error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
        else {
            return res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
}
exports.ReservationController = ReservationController;
// Exporta la instancia del controlador
exports.reservationController = new ReservationController();
//# sourceMappingURL=reservesControllers.js.map