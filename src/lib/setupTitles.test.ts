import setupTitles from './setupTitles';
import { connectionToDatabase } from './database';

import { Title } from './entity/Title';
test('it should get all the titles back', async () => {
	await connectionToDatabase();
	setupTitles();
	const count = await Title.findAndCount({});
	return expect(count).toBeGreaterThan(0);
});
