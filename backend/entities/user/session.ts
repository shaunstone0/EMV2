import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('session')
@Index('id', ['id'], { unique: true })
export class Session {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({
        type: 'date',
        nullable: false,
        name: 'expires',
    })
    public expires: string;
}
