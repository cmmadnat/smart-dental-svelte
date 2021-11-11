import { getConnection } from 'typeorm';
import { Title } from './entity/Title';
import { checkTitles } from './getTitles';

const setupTitles = async (): Promise<void> => {
	const count = await countTitle();
	if (count === 0) {
		const titles = await checkTitles();
		// for (let i = 0; i < titles.length; i++) {
		//   titles[i].save()
		// }
		await getConnection().manager.save(titles);
	}
};
const countTitle = async () => {
	return await Title.count();
};
export default setupTitles;
