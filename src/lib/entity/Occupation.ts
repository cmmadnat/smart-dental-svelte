import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppUserInfo } from './AppUserInfo';

@Entity()
export class Occupation extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar', { length: 150 })
	name: string;

	@OneToMany(() => AppUserInfo, (appUserInfo) => appUserInfo.occupation)
	appUserInfos: AppUserInfo[];
}
