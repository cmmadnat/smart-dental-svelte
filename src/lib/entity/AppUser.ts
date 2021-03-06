import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne, OneToOne } from 'typeorm';
import { AppUserInfo } from './AppUserInfo';
import { Title } from './Title';

@Entity()
export class AppUser extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	// @Column({ length: 3, type: 'varchar' })
	// title: string;
	@ManyToOne(() => Title, (title) => title.users)
	title: Title;
	@Column({ length: 50, type: 'varchar' })
	firstName: string;
	@Column({ length: 50, type: 'varchar' })
	lastName: string;
	@Column({ length: 1, type: 'varchar' })
	IDCard: string;
	@Column({ length: 13, type: 'varchar' })
	cardNumber: string;
	@Column({ length: 10, type: 'varchar' })
	mobile: string;
	@Column({ length: 50, type: 'varchar' })
	email: string;
	@Column({ length: 60, type: 'varchar' })
	password: string;
	@Column({ length: 20, type: 'varchar' })
	salt: string;
	@OneToOne(() => AppUserInfo, (appUserInfo) => appUserInfo.appUser, { cascade: true })
	appUserInfo: AppUserInfo;
}
