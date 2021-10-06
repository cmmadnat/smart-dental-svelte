import thai from 'thai-data';

interface AutoSuggest {
	subDistrict: string[];
	districtName: string | null;
	provinceName: string;
	zipCode: string;
}
export function get({ query }: { query: URLSearchParams }): { body: AutoSuggest } {
	const postalCode = query.get('postalCode');
	const subDistrict = query.get('subDistrict');

	const autoSuggestion: AutoSuggest = subDistrict
		? thai.autoSuggestion(postalCode, subDistrict)
		: thai.autoSuggestion(postalCode);
	return {
		body: autoSuggestion
	};
}
