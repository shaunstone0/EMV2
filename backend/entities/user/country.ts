import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('country')
@Index('id', ['id'], { unique: true })
export class Country {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public dateCreated: string;

    @Column('varchar', {
        nullable: false,
        length: 100,
        name: 'code',
    })
    public code: string;

    @Column('varchar', {
        nullable: false,
        length: 100,
        name: 'name',
    })
    public name: string;
}
