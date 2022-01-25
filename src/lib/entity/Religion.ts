import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppUserInfo } from './AppUserInfo';

@Entity()
export class Religion extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('bigint', { nullable: true })
	code: number;

	@Column('text', { nullable: true })
	thaiName: string;

	@Column('text', { nullable: true })
	engName: string;

	@OneToMany(() => AppUserInfo, (appUserInfo) => appUserInfo.religion)
	appUserInfos: AppUserInfo[];
}
