import setupTitles from './setupTitles';
import { connectionToDatabase } from './database';

import { Title } from './entity/Title';
import { getConnection } from 'typeorm';
beforeAll(async () => {
	await connectionToDatabase();
});
test('it should get all the titles back', async () => {
	await setupTitles().catch((e) => console.error(e));
	const count = await Title.count({});
	return expect(count).toBeGreaterThan(0);
});
afterAll(async () => {
	await getConnection().close();
});
