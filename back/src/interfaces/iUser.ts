import { ICredential } from "./iCredentials";
import { IReservation } from "./iReseves";

export interface iUser {
    id: number;
    name: string;
    email: string;
    age: number;
    credential: ICredential;
    reservations: IReservation[];
  }