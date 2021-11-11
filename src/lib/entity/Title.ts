import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppUser } from './AppUser';

@Entity()
export class Title extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar', { length: 3 })
	code: string;

	@OneToMany(() => AppUser, (user) => user.title)
	users: AppUser[];

	@Column('varchar', { length: 50 })
	name: string;
}
