import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AppUserInfo } from './AppUserInfo';

@Entity()
export class Address extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;
	@Column('tinyint', { default: 1 })
	addressType: number;

	@Column('varchar', { length: 100, default: '' })
	line1: string;
	@Column('varchar', { length: 5, default: '' })
	postalCode: string;
	@Column('varchar', { length: 50, default: '' })
	subdistrict: string;

	@OneToOne(() => AppUserInfo, (appUserInfo) => appUserInfo.address)
	appUserInfo: AppUserInfo;
	@OneToOne(() => AppUserInfo, (appUserInfo) => appUserInfo.emergencyAddress)
	emergencyAddress: AppUserInfo;
}
