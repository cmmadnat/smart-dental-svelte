import { ShoppingItems } from '$lib/entity/ShoppingItem';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const post = async ({ body }) => {
	const { id, description, title, images } = body;

	const item =
		id === 'new' ? new ShoppingItems() : await ShoppingItems.findOne(id, { relations: ['photos'] });
	item.description = description;
	item.title = title;
	item.photos.forEach(async (it) => await it.remove());
	item.photos = images.map((it) => ({ order: it.order, base64: it.base64 }));

	const newItem = await item.save();
	return { body: { id: newItem.id } };
};
