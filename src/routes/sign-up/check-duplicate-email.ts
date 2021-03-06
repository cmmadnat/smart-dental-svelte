import type { RequestHandler } from '@sveltejs/kit';
import { AppUser } from '$lib/entity/AppUser';

export const post: RequestHandler = async ({ body }) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const { email } = body;

	let duplicate = false;

	const user = await AppUser.find({ email: email });
	if (user !== null) duplicate = true;

	return {
		body: { duplicate }
	};
};
