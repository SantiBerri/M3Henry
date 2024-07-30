export class CreateReservationDto {
    fecha: Date;
    hora: string;
    motivo: string;
    cantidadPersonas: number;
    solicitud: string;
    userId: number; 
  }