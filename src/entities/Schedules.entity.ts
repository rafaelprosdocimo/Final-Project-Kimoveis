import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { RealEstate } from "./Real_estate.entity";
import { User } from "./User.entity";

@Entity("schedules")
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string | Date;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => RealEstate, (RealEstate) => RealEstate.schedules)
  realEstate: RealEstate;

  @ManyToOne(() => User, (User) => User.schedules)
  user: User;
}
