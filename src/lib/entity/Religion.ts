import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppUserInfo } from './AppUserInfo';

@Entity()
export class Religion extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('tinyint')
	code: number;

	@Column('varchar', { length: 40 })
	name: string;

	@OneToMany(() => AppUserInfo, (appUserInfo) => appUserInfo.religion)
	appUserInfos: AppUserInfo[];
}
