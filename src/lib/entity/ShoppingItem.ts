import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Photo } from './Photo';

@Entity()
export class ShoppingItems extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar', { length: 60 })
	title: string;

	@Column('text')
	description: string;

	@OneToMany(() => Photo, (photo) => photo.shoppingItems, { cascade: true })
	photos: Photo[];
}
