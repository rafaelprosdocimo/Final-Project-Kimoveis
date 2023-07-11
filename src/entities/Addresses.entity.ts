import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";

    import { getRounds, hashSync } from "bcryptjs";
import { RealEstate } from "./Real_estate.entity";

@Entity("addresses")
export class Address{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45 })
    street: string;

    @Column({ length: 8 })
    zipCode: string;

    @Column({type:"varchar", length: 7, nullable: true })
    number: string | null ;

    @Column({ length: 20 })
    city: string;

    @Column({ length: 2 })
    state: string;

    @OneToOne(() => RealEstate, (r) => r.address)
    realEstate: RealEstate;
}

