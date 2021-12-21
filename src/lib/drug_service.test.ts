import { get_drugs } from './drug_service';

test('get the list of drug from csv', () => {
	const list = get_drugs();
	expect(list.length).toBeGreaterThan(0);
});
