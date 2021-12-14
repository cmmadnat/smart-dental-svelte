import { ShoppingItems } from '$lib/entity/ShoppingItem';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const post = async ({ body }) => {
	const { id, description, title, images } = body;
	console.log(id);
	console.log(description);
	console.log(title);
	console.log(images);

	const item = id === 'new' ? new ShoppingItems() : await ShoppingItems.findOne(id);
	item.description = description;
	item.title = title;
	item.photos = images.map((it) => ({ order: it.order, base64: it.base64 }));

	const newItem = await item.save();
	return { body: { id: newItem.id } };
};
