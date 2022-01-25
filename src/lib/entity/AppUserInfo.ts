import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToOne,
	PrimaryGeneratedColumn
} from 'typeorm';
import { Address } from './Address';
import { AppUser } from './AppUser';
import { Drug } from './Drug';
import { FamilyInfo } from './FamilyInfo';
import { Nationality } from './Nationality';
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

	@ManyToOne(() => Nationality, (nationality) => nationality.appUserInfos)
	nationality: Nationality;

	@ManyToOne(() => Religion, (religion) => religion.appUserInfos)
	religion: Religion;
	@OneToOne(() => Address, (address) => address.appUserInfo, { cascade: true })
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

	@OneToOne(() => Address, (address) => address.emergencyAddress, { cascade: true })
	@JoinColumn()
	emergencyAddress: Address;

	@OneToOne(() => FamilyInfo, (familyInfo) => familyInfo.father, { cascade: true })
	@JoinColumn()
	fatherFamilyInfo: FamilyInfo;

	@OneToOne(() => FamilyInfo, (familyInfo) => familyInfo.mother, { cascade: true })
	@JoinColumn()
	motherFamilyInfo: FamilyInfo;

	@OneToOne(() => FamilyInfo, (familyInfo) => familyInfo.sprouse, { cascade: true })
	@JoinColumn()
	sprouseFamilyInfo: FamilyInfo;

	@ManyToMany(() => Drug)
	@JoinTable()
	allergies: Drug[];
}
