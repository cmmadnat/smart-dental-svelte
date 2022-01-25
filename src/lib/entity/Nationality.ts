import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppUserInfo } from './AppUserInfo';

@Entity()
export class Nationality extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('bigint', { nullable: true })
	code: number;
	@Column('bigint', { nullable: true })
	no: number;
	@Column('double', { nullable: true })
	DRG: number;
	@Column('text', { nullable: true })
	thaiName: number;
	@Column('text', { nullable: true })
	engName: number;
	@OneToMany(() => AppUserInfo, (appuserInfo) => appuserInfo.nationality)
	appUserInfos: AppUserInfo[];
}
