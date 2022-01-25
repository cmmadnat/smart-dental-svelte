import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppUser } from './AppUser';

@Entity()
export class Title extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('bigint')
	code: number;

	@OneToMany(() => AppUser, (user) => user.title)
	users: AppUser[];

	@Column('text', { nullable: true })
	thaiName: string;

	@Column('text', { nullable: true })
	engName: string;
}
