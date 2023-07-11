import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";


  import { getRounds, hashSync } from "bcryptjs";
import { RealEstate } from "./Real_estate.entity";

@Entity("categories")
export class Category {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45 , unique: true})
    name: string;

    @OneToMany(()=> RealEstate, (r)=> r.category)
    realEstate: RealEstate[];

}