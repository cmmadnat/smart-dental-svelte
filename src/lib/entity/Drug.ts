import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Drug extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;
	@Column('varchar', { length: 100, default: '' })
	name: string;
	@Column('varchar', { length: 60, default: '' })
	dose: string;
	@Column('varchar', { length: 40, default: '' })
	unitName: string;
	@Column('smallint')
	price: number;
}
