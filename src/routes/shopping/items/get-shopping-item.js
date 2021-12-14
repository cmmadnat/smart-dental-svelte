import { ShoppingItems } from '$lib/entity/ShoppingItem';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const post = async ({ body }) => {
	const { id } = body;
	if (id !== 'new') {
		const item = await ShoppingItems.findOne(id, {
			relations: ['photos']
		});
		return {
			body: item
		};
	}
	return {};
};
