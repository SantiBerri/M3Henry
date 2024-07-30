import { iUser } from "./iUser";

export interface IReservation {
    id: number;
    fecha: Date;
    hora: string; 
    motivo: string;
    cantidadPersonas: number;
    solicitud: string;
    user: iUser;
  }
  