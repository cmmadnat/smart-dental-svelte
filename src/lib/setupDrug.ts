import { getConnection } from 'typeorm';
import { get_drugs } from './drug_service';
import { Drug } from './entity/Drug';

export const setupDrug = async (): Promise<Drug[]> => {
	if ((await Drug.count()) == 0) {
		const list = get_drugs();
		const data = list.map((it) => {
			const d = new Drug();
			let price = Math.floor(d.price);
			price = price ? price : 0;
			d.name = it.name;
			d.unitName = it.unitName;
			d.price = price;
			d.dose = it.docile;
			return d;
		});
		return getConnection().manager.save(data);
	}
};
