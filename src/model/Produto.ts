import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    nome?: string;
    @Column()
    categoria?: string;
    @Column("decimal")
    preco?: number;
  }