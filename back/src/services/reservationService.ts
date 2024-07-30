import { AppDataSource } from '../db/data-Source';
import { Reservation } from '../entities/reserves';
import { User } from '../entities/entitiesUser';

export class ReservationService {
  async createReservation(
    userId: number,
    fecha: Date,
    hora: string,
    motivo: string | null, 
    cantidadPersonas: number,
    solicitud: string
  ): Promise<Reservation> {
    const reservationRepository = AppDataSource.getRepository(Reservation);
    const userRepository = AppDataSource.getRepository(User);
  
    try {
      const user = await userRepository.findOneBy({ id: userId });
      if (!user) {
        throw new Error('User not found');
      }
  
      const newReservation = reservationRepository.create({
        user,
        fecha,
        hora,
        motivo: motivo || '', 
        cantidadPersonas,
        solicitud
      });
  
      await reservationRepository.save(newReservation);
      return newReservation;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  }
  

  async getReservationById(reservationId: number): Promise<Reservation | null> {
    const reservationRepository = AppDataSource.getRepository(Reservation);
    try {
      return await reservationRepository.findOneBy({ id: reservationId });
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  }

  async updateReservation(
    reservationId: number,
    updateReservationDto: any
  ): Promise<Reservation> {
    const reservationRepository = AppDataSource.getRepository(Reservation);
    try {
      const reservationToUpdate = await reservationRepository.findOneBy({ id: reservationId });
      if (!reservationToUpdate) throw new Error('Reservation not found');

      await reservationRepository.save(reservationToUpdate);
      return reservationToUpdate;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  }

  async deleteReservation(reservationId: number): Promise<void> {
    const reservationRepository = AppDataSource.getRepository(Reservation);
    try {
      await reservationRepository.delete(reservationId);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  }
}