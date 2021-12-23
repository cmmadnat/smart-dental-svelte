import { ShoppingItems } from '$lib/entity/ShoppingItem';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const post = async () => {
	const list = await ShoppingItems.findAndCount({ relations: ['photos'] });
	return {
		body: list
	};
};
