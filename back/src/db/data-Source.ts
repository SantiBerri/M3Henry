import { DataSource } from "typeorm";
import { Credentials } from "../entities/credentialUser";
import { User } from "../entities/entitiesUser";
import { Reservation } from "../entities/reserves";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "150306san",
    database: "m3",
    synchronize: true,
    logging: true,
    entities: [Reservation, User, Credentials ],
    subscribers: [],
    migrations: [],
})