import thai from 'thai-data';

export async function get({ query }) {
	const postalCode = query.get('postalCode');
	const subDistrict = query.get('subDistrict');

	var autoSuggestion = subDistrict
		? thai.autoSuggestion(postalCode, subDistrict)
		: thai.autoSuggestion(postalCode);
	return {
		body: autoSuggestion
	};
}
