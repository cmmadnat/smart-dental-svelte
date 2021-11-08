import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = ({ body }) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	const { email } = body;
	let duplicate = true;

	duplicate = !email;
	return {
		body: { duplicate }
	};
};
