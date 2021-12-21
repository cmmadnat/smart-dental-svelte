import { AppUser } from '$lib/entity/AppUser';
import { Drug } from '$lib/entity/Drug';
import type { RequestHandler } from '@sveltejs/kit';

interface Body {
	id: string;
	allergies: { id: number; name: string }[];
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const post: RequestHandler<unknown, Body> = async ({ body }) => {
	const { id, allergies } = body;
	const info = await (await AppUser.findOne(id, { relations: ['appUserInfo'] })).appUserInfo;
	const al = await Drug.findByIds(allergies.map((it) => it.id));
	info.allergies = al;
	info.save();
	return { body: { allergies, info } };
};
