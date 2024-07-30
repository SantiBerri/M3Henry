import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./entitiesUser";

@Entity({ name: "credentials" })
export class Credentials {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @OneToOne(() => User, user => user.credential, { onDelete: "CASCADE" })
    user: User;
}