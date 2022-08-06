import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  goal: number;
  @Column()
  salary: number;
  @Column()
  devise: string;
  @Column()
  pictureUrl: string;
}
