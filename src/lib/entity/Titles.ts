import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { AppUser } from './AppUser';

@Entity()
export class Title extends BaseEntity {
	@PrimaryColumn('varchar', { length: 3 })
	code: string;

	@OneToMany(() => AppUser, (user) => user.title)
	users: AppUser[];

	@Column('varchar', { length: 20 })
	name: string;
}
