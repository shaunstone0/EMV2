import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    Index,
    OneToOne,
    PrimaryGeneratedColumn,
    JoinColumn,
} from 'typeorm';
import { EncryptedColumn } from 'typeorm-encrypted-column';
import encryptionOptions from '../../config/typeorm-encryption-options';
import { Profile } from './profile';
import { hash, genSalt, compare } from 'bcrypt';
import { Role } from './role';

@Entity('user')
@Index('id', ['id'], { unique: true })
export class User {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public dateCreated: string;

    @EncryptedColumn(encryptionOptions)
    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'email',
        unique: true,
    })
    public email: string;

    @EncryptedColumn(encryptionOptions)
    @Column('varchar', {
        nullable: false,
        length: 255,
        name: 'password',
        select: false,
    })
    public password: string;

    @OneToOne(() => Role, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'role_id' })
    public role_id: Role;

    @OneToOne(() => Profile, (profile: Profile) => profile.user_id, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'profile_id' })
    public profile_id: Profile;

    @BeforeInsert()
    @BeforeUpdate()
    private async hashPassword(): Promise<void> {
        if (this.password) {
            const salt = await genSalt(12);
            this.password = await hash(this.password, salt);
        }
    }

    async matchPassword(userPassword: string): Promise<boolean> {
        return await compare(userPassword, this.password);
    }
}
