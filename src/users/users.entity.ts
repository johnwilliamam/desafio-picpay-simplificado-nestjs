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
    @Column({unique: true, type: 'number', nullable: false})
    document: string;
    @Column({unique: true, type: 'varchar', nullable: false})
    @IsEmail()
    email: string;
    @Column({unique: false, type: 'varchar', nullable: true})
    password: string;
    @Column({unique: false, type: 'varchar', nullable:false})
    type: string;
    @Column({unique: false, type: 'decimal', nullable: true, default: 0})
    balance: number

}