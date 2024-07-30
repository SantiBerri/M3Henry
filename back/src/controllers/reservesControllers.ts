import { Request, Response } from 'express';
import { ReservationService } from '../services/reservationService';

export class ReservationController {
  private reservationService: ReservationService;

  constructor() {
    this.reservationService = new ReservationService();
  }

  public createReservation = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { userId, fecha, hora, motivo, cantidadPersonas, solicitud } = req.body;
      const newReservation = await this.reservationService.createReservation(
        userId, fecha, hora, motivo, cantidadPersonas, solicitud
      );
      return res.status(201).json(newReservation);
    } catch (error) {
      return this.handleError(res, error);
    }
  };

  public getReservationById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const reservationId = parseInt(req.params.id);
      const reservation = await this.reservationService.getReservationById(reservationId);
      if (!reservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
      return res.status(200).json(reservation);
    } catch (error) {
      return this.handleError(res, error);
    }
  };

  public updateReservation = async (req: Request, res: Response): Promise<Response> => {
    try {
      const reservationId = parseInt(req.params.id);
      const updateReservationDto = req.body;
      const updatedReservation = await this.reservationService.updateReservation(
        reservationId, updateReservationDto
      );
      return res.status(200).json(updatedReservation);
    } catch (error) {
      return this.handleError(res, error);
    }
  };

  public deleteReservation = async (req: Request, res: Response): Promise<Response> => {
    try {
      const reservationId = parseInt(req.params.id);
      await this.reservationService.deleteReservation(reservationId);
      return res.status(204).send();
    } catch (error) {
      return this.handleError(res, error);
    }
  };

  private handleError(res: Response, error: unknown): Response {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    } else {
      return res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
}

export const reservationController = new ReservationController();
