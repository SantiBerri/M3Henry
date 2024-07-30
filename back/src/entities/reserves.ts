import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./entitiesUser";

@Entity({
    name: "reservations"
})
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: Date;

    @Column()
    hora: string; 

    @Column("text")
    motivo: string;

    @Column()
    cantidadPersonas: number;

    @Column("text")
    solicitud: string;

    @ManyToOne(() => User, user => user.reservations)
    user: User;
}