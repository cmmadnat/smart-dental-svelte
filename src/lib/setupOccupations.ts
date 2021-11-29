import { getConnection } from 'typeorm';
import { Occupation } from './entity/Occupation';
import { checkOccupations } from './getOccupations';

const setupOccupations = async (): Promise<void> => {
	const count = await countOccupation();
	if (count === 0) {
		const occupations = await checkOccupations();
		await getConnection().manager.save(occupations);
	}
};
const countOccupation = async () => {
	return await Occupation.count();
};
export default setupOccupations;
