"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationService = void 0;
const data_Source_1 = require("../db/data-Source");
const reserves_1 = require("../entities/reserves");
const entitiesUser_1 = require("../entities/entitiesUser");
class ReservationService {
    async createReservation(userId, fecha, hora, motivo, // Permitir un motivo opcional
    cantidadPersonas, solicitud) {
        const reservationRepository = data_Source_1.AppDataSource.getRepository(reserves_1.Reservation);
        const userRepository = data_Source_1.AppDataSource.getRepository(entitiesUser_1.User);
        try {
            const user = await userRepository.findOneBy({ id: userId });
            if (!user) {
                throw new Error('User not found');
            }
            const newReservation = reservationRepository.create({
                user,
                fecha,
                hora,
                motivo: motivo || '', // Si motivo es nulo, asigna una cadena vacía
                cantidadPersonas,
                solicitud
            });
            await reservationRepository.save(newReservation);
            return newReservation;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            else {
                throw new Error('An unexpected error occurred');
            }
        }
    }
    async getReservationById(reservationId) {
        const reservationRepository = data_Source_1.AppDataSource.getRepository(reserves_1.Reservation);
        try {
            return await reservationRepository.findOneBy({ id: reservationId });
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            else {
                throw new Error('An unexpected error occurred');
            }
        }
    }
    async updateReservation(reservationId, updateReservationDto) {
        const reservationRepository = data_Source_1.AppDataSource.getRepository(reserves_1.Reservation);
        try {
            const reservationToUpdate = await reservationRepository.findOneBy({ id: reservationId });
            if (!reservationToUpdate)
                throw new Error('Reservation not found');
            // Aquí deberías implementar la lógica para actualizar las propiedades
            // de la reserva con los valores de updateReservationDto.
            // Por ejemplo:
            // reservationToUpdate.fecha = updateReservationDto.fecha || reservationToUpdate.fecha;
            // ...
            await reservationRepository.save(reservationToUpdate);
            return reservationToUpdate;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            else {
                throw new Error('An unexpected error occurred');
            }
        }
    }
    async deleteReservation(reservationId) {
        const reservationRepository = data_Source_1.AppDataSource.getRepository(reserves_1.Reservation);
        try {
            await reservationRepository.delete(reservationId);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            else {
                throw new Error('An unexpected error occurred');
            }
        }
    }
}
exports.ReservationService = ReservationService;
//# sourceMappingURL=reservationService.js.map