import { Credentials } from "../entities/credentialUser";
import { Reservation } from "../entities/reserves";
import { User } from "../entities/entitiesUser";
import { AppDataSource } from "../db/data-Source";


export const userModel = AppDataSource.getRepository(User);
export const reserveModel = AppDataSource.getRepository(Reservation);
export const credentialModel = AppDataSource.getRepository(Credentials);