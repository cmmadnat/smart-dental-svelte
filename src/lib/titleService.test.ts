import { getConnection } from 'typeorm';
import { connectionToDatabase } from './database';
import { convertCodeToTitle } from './titleService';

beforeEach(async () => {
	await connectionToDatabase();
});

test('it should resolve code from the title', async () => {
	const title = await convertCodeToTitle('002');
	return expect(title.name).toBe('นาย');
});

afterEach(() => {
	getConnection().close();
});
