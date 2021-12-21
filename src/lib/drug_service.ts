import Papa from 'papaparse';
import fs from 'fs';
export const get_drugs = (): {
	name: string;
	docile: string;
	unitName: string;
	price: string;
}[] => {
	const data = Papa.parse(fs.readFileSync('static/drug_price.csv', 'utf8'), { header: true });

	const drugs = data.data.map((it) => ({
		name: it['ชื่อสามัญ'],
		docile: it['รูปแบบยา/ความแรง'],
		unitName: it['ขนาดบรรจุ'],
		price: parseFloat(it['ราคากลาง(รวมภาษีมูลค่าเพิ่ม)(บาท)']).toPrecision(2)
	}));
	return drugs;
};
