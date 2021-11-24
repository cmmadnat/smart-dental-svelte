import { getReligion } from './getReligion';

test('it should get all the religion', async () => {
	const result = await getReligion();
	return expect(result.length).toBeGreaterThan(0);
});
