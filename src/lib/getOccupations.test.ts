import { checkOccupations } from './getOccupations';

test('it should be name', async () => {
	const occupations = await checkOccupations();
	return expect(occupations[0].name).toBe('ทหาร');
});
