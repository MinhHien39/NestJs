/* eslint-disable prettier/prettier */  
import { Entity , Column , PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import { Profile } from './Profile';
@Entity({name: 'users'})
export class User{
  save() {
    throw new Error('Method not implemented.');
  }
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

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}