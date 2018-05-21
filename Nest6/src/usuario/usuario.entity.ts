import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {FotoEntity} from "../fotos/foto.entity";

@Entity('web_herrera_usuario')
export class  UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length: 50})
    nombre: string;

    @OneToMany(type => FotoEntity, fotoEntity=> fotoEntity.usuarioId)
    fotos: FotoEntity[];

    
}