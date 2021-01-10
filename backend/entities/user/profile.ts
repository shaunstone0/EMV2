import { Column, Entity, Index, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EncryptedColumn } from 'typeorm-encrypted-column';
import encryptionOptions from '../../config/typeorm-encryption-options';
import { User } from './user';
import { JoinColumn } from 'typeorm/browser';
import { Country } from './country';

@Entity('profile')
@Index('id', ['id'], { unique: true })
export class Profile {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @OneToOne(() => User, (user: User) => user.profile, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public user_id: User;

    @EncryptedColumn(encryptionOptions)
    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'firstname',
    })
    public firstname: string;

    @EncryptedColumn(encryptionOptions)
    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'lastname',
    })
    public lastname: string;

    @EncryptedColumn(encryptionOptions)
    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'birthday_day',
    })
    public birthday_day: string;

    @EncryptedColumn(encryptionOptions)
    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'birthday_month',
    })
    public birthday_month: string;

    @EncryptedColumn(encryptionOptions)
    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'birthday_year',
    })
    public birthday_year: string;

    @EncryptedColumn(encryptionOptions)
    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'gender',
    })
    public gender: string;

    @EncryptedColumn(encryptionOptions)
    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'address1',
    })
    public address1: string;

    @EncryptedColumn(encryptionOptions)
    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'address2',
    })
    public address2: string;

    @EncryptedColumn(encryptionOptions)
    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'city',
    })
    public city: string;

    @EncryptedColumn(encryptionOptions)
    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'zipcode',
    })
    public zipcode: string;

    @OneToOne(() => Country, (country: Country) => country.code, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn()
    public country_id: Country;

    @EncryptedColumn(encryptionOptions)
    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'state',
    })
    public state: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public dateCreated: string;
}
