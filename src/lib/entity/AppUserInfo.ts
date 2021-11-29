import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToOne,
	PrimaryGeneratedColumn
} from 'typeorm';
import { Address } from './Address';
import { AppUser } from './AppUser';
import { FamilyInfo } from './FamilyInfo';
import { Occupation } from './Occupation';
import { Religion } from './Religion';

@Entity()
export class AppUserInfo extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToOne(() => AppUser, (appUser) => appUser.appUserInfo)
	@JoinColumn()
	appUser: AppUser;

	@Column('char', { default: 'm' })
	gender: string;

	@Column('date', { nullable: true })
	birthday: Date;
	@Column('char', { default: '1' })
	maritalStatus: string;
	@Column('varchar', { length: 3, default: 'THA' })
	nationality: string;

	@ManyToOne(() => Religion, (religion) => religion.appUserInfos)
	religion: Religion;
	@Column('char', { default: '1' })
	addressType: string;
	@OneToOne(() => Address, (address) => address.appUserInfo)
	@JoinColumn()
	address: Address;

	@ManyToOne(() => Occupation, (occupation) => occupation.appUserInfos)
	occupation: Occupation;
	@Column('varchar', { length: 50, default: '' })
	organization: string;
	@Column('date', { nullable: true })
	expireDate: Date;
	@Column('varchar', { length: 50, default: '' })
	homePhone: string;
	@Column('varchar', { length: 50, default: '' })
	workPhone: string;

	@Column('varchar', { length: 50, default: '' })
	emergencyName: string;

	@Column('varchar', { length: 50, default: '' })
	emergencyRelationship: string;

	@Column('char', { default: '1' })
	emergencyAddressType: string;
	@OneToOne(() => Address, (address) => address.emergencyAddress)
	@JoinColumn()
	emergencyAddress: Address;

	@OneToOne(() => FamilyInfo, (familyInfo) => familyInfo.father)
	@JoinColumn()
	fatherFamilyInfo: FamilyInfo;

	@OneToOne(() => FamilyInfo, (familyInfo) => familyInfo.mother)
	@JoinColumn()
	motherFamilyInfo: FamilyInfo;

	@OneToOne(() => FamilyInfo, (familyInfo) => familyInfo.sprouse)
	@JoinColumn()
	sprouseFamilyInfo: FamilyInfo;
}
