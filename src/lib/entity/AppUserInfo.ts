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
import { FamilyInfo } from './FamilyInfo';
import { Occupation } from './Occupation';
import { Religion } from './Religion';

@Entity()
export class AppUserInfo extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('char')
	gender: string;

	@Column('date')
	birthday: Date;
	@Column('char')
	maritalStatus: string;
	@Column('varchar', { length: 3 })
	nationality: string;

	@ManyToOne(() => Religion, (religion) => religion.appUserInfos)
	religion: Religion;
	@OneToOne(() => Address, (address) => address.appUserInfo)
	@JoinColumn()
	address: Address;

	@ManyToOne(() => Occupation, (occupation) => occupation.appUserInfos)
	occupation: Occupation;
	@Column('varchar', { length: 50 })
	organization: string;
	@Column('date')
	expireDate: Date;
	@Column('varchar', { length: 50 })
	homePhone: string;
	@Column('varchar', { length: 50 })
	workPhone: string;

	@Column('varchar', { length: 50 })
	emergencyName: string;

	@Column('varchar', { length: 50 })
	emergencyRelationship: string;
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
