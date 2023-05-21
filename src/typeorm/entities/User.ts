/* eslint-disable prettier/prettier */  
import { Entity , Column , PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: 'users'})
export class User{
  @PrimaryGeneratedColumn({type: 'bigint'})
  id : number;

  @Column({unique: true})
  username: string;

  @Column()
  password: string;

  @Column()
  createAt: Date;

  @Column({nullable : true})
  authStrategy: string;
}