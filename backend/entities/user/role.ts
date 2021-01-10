import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('role')
@Index('id', ['id'], { unique: true })
export class Role {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public dateCreated: string;

    @Column('varchar', {
        nullable: false,
        length: 50,
        name: 'role_name',
    })
    public role_name: string;
}
