import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Credentials } from "../entities/credentialUser";
import { Reservation } from "./reserves";

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    age: number;

    @Column()
    password: string;

    @OneToOne(() => Credentials, credentials => credentials.user, { onDelete: "CASCADE" })
    @JoinColumn()
    credential: Credentials;

    @OneToMany(() => Reservation, reservation => reservation.user, { onDelete: "CASCADE" })
    reservations: Reservation[];
}