import Papa from 'papaparse';
import fs from 'fs';
import { Religion } from './entity/Religion';
export const getReligion = (): Religion[] => {
	const data = Papa.parse(fs.readFileSync('static/religions.csv', 'utf8'), { header: true });
	const d2 = data.data.map((element) => {
		const t = new Religion();
		t.code = element['code'];
		t.name = element.name;
		t.appUserInfos = [];
		return t;
	});
	return d2;
};
