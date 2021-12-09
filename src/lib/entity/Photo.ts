import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ShoppingItems } from './ShoppingItem';

@Entity()
export class Photo extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('text')
	base64: string;
	@Column('tinyint')
	order: number;

	@ManyToOne(() => ShoppingItems, (shoppingItems) => shoppingItems.photos)
	shoppingItems: ShoppingItems;
}
