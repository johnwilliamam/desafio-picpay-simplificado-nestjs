import { Users } from 'src/users/users.entity';
import { BaseEntity, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transactions extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({type: 'float', nullable: false})
    value: number;
    @ManyToOne(()=>Users, (user)=> user.id)
    @JoinColumn()
    receiver: Users
    @ManyToOne(()=> Users, (user)=> user.id)
    @JoinColumn()
    sender :Users;
    @CreateDateColumn()
    timestamp: Date;

    @BeforeUpdate()
    isertUpdate(){
        this.timestamp = new Date();
    }

}