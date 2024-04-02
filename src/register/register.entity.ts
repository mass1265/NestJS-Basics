import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class registerEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userName: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}