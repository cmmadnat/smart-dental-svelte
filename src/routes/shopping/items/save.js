// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const post = ({ body }) => {
	const { id, description, title, images } = body;
	console.log(id);
	console.log(description);
	console.log(title);
	console.log(images);
	return { body: { id } };
};
