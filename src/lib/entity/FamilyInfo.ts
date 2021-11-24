import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AppUserInfo } from './AppUserInfo';

@Entity()
export class FamilyInfo extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar', { length: 50 })
	firstName: string;

	@Column('varchar', { length: 50 })
	lastName: string;

	@OneToOne(() => AppUserInfo, (appUserInfo) => appUserInfo.fatherFamilyInfo)
	father: AppUserInfo;

	@OneToOne(() => AppUserInfo, (appUserInfo) => appUserInfo.motherFamilyInfo)
	mother: AppUserInfo;

	@OneToOne(() => AppUserInfo, (appUserInfo) => appUserInfo.sprouseFamilyInfo)
	sprouse: AppUserInfo;
}
