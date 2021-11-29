import fs from 'fs';
import Papa from 'papaparse';
import { Occupation } from './entity/Occupation';
export const checkOccupations = async (): Promise<Occupation[]> => {
	const data = Papa.parse(fs.readFileSync('static/occupations.csv', 'utf8'), { header: true });
	const d2 = data.data.map((element) => {
		const t = new Occupation();
		t.name = element['name'];
		t.appUserInfos = [];
		return t;
	});
	return d2;
};
