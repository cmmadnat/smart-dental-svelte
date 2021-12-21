import Papa from 'papaparse';
import fs from 'fs';
export const get_drugs = (): { name: string; dose: string; unitName: string; price: number }[] => {
	const data = Papa.parse(fs.readFileSync('static/drug_price.csv', 'utf8'), { header: true });

	const drugs = data.data.map((it) => ({
		name: it['ชื่อสามัญ'],
		docile: it['รูปแบบยา/ความแรง'],
		unitName: it['ขนาดบรรจุ'],
		price: it['ราคากลาง(รวมภาษีมูลค่าเพิ่ม)(บาท)']
	}));
	return drugs;
};
