import setupTitles from './setupTitles';
import { connectionToDatabase } from './database';

import { Title } from './entity/Title';
test('it should get all the titles back', async () => {
	await connectionToDatabase();
	await setupTitles().catch((e) => console.error(e));
	const count = await Title.count({});
	return expect(count).toBeGreaterThan(0);
});
