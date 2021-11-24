import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AppUserInfo } from './AppUserInfo';

@Entity()
export class Address extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;
	@Column('tinyint')
	addressType: number;

	@Column('varchar', { length: 100 })
	line1: string;
	@Column('varchar', { length: 5 })
	postalCode: string;
	@Column('varchar', { length: 50 })
	subdistrict: string;

	@OneToOne(() => AppUserInfo, (appUserInfo) => appUserInfo.address)
	appUserInfo: AppUserInfo;
	@OneToOne(() => AppUserInfo, (appUserInfo) => appUserInfo.emergencyAddress)
	emergencyAddress: AppUserInfo;
}
