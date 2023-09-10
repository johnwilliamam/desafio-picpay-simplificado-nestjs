import { IsEmail } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column({unique: false, type: 'varchar', nullable: false})
    firstName: string;
    @Column({unique: false, type: 'varchar', nullable: true})
    lastName: string;
    @Column({unique: false, type: 'number', nullable: false})
    document: number;
    @Column({unique: false, type: 'varchar', nullable: false})
    @IsEmail()
    email: string;
    @Column({unique: false, type: 'varchar', nullable: true})
    password: string;
    @Column({unique: false, type: 'varchar', nullable:false})
    type: string;
    @Column({unique: false, type: 'decimal', nullable: false, default: 0})
    balance: number

}