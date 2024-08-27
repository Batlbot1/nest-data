import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({length: 255})
  name: string

  @Column({unique: true,length: 255})
  email: string

  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date;

  @Column({default: 'user'})
  role: string
}
