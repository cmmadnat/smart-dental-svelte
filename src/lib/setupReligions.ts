import { getConnection } from 'typeorm';
import { Religion } from './entity/Religion';
import { getReligion } from './getReligion';

const setupReligions = async (): Promise<void> => {
	const count = await countReligion();
	if (count === 0) {
		const religions = await getReligion();
		await getConnection().manager.save(religions);
	}
};
const countReligion = async () => {
	return await Religion.count();
};
export default setupReligions;
