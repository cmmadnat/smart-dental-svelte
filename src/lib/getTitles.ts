import { Title } from './entity/Title';
import fs from 'fs';
import Papa from 'papaparse';
export const checkTitles = async (): Promise<Title[]> => {
	const data = Papa.parse(fs.readFileSync('static/titles.csv', 'utf8'), { header: true });
	const d2 = data.data.map((element) => {
		const t = new Title();
		t.code = element['CODE'];
		t.name = element.TITLE;
		return t;
	});
	return d2;
};
