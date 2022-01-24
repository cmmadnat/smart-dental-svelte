import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppUserInfo } from './AppUserInfo';

@Entity()
export class Occupation extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('text')
	thaiName: string;

	@Column('text', { nullable: true })
	engName: string;

	@Column('bigint')
	code: string;

	@OneToMany(() => AppUserInfo, (appUserInfo) => appUserInfo.occupation)
	appUserInfos: AppUserInfo[];
}
