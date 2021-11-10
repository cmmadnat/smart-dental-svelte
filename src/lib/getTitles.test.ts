import { checkTitles } from './getTitles';

test('should return something', async () => {
	const x = await checkTitles();
	expect(x[0].code).toBe('001');
	expect(x[0].name).toBe('เด็กชาย');
	return expect(x.length).toBeGreaterThan(1);
});
