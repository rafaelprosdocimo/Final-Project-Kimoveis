import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";

    import { getRounds, hashSync } from "bcryptjs";
import { Address } from "./Addresses.entity";
import { Category } from "./Categories.entity";
import { Schedule } from "./Schedules.entity";

@Entity("real_estate")
export class RealEstate{

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ default: false })
    sold: boolean;

    @Column({ type: "decimal" , default: 0 })
    value: number | string;

    @Column({ type: "integer"})
    size: number;

    @CreateDateColumn({ type: "date"  })
    createdAt: string | Date;

    @UpdateDateColumn({ type: "date"  })
    updatedAt: string | Date;
    
    @OneToOne(() => Address, (address) => address.realEstate)
    @JoinColumn()
    address: Address;

    @ManyToOne(() => Category)
    category: Category;

    @OneToMany(() => Schedule, (Schedule) => Schedule.realEstate) 
    schedules: Schedule[];
    
}
