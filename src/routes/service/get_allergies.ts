import { AppUser } from '$lib/entity/AppUser';
import type { RequestHandler } from '@sveltejs/kit';

interface Body {
	id: string;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const post: RequestHandler<unknown, Body> = async ({ body }) => {
	const { id } = body;
	const appUser = await AppUser.findOne(id, {
		relations: ['appUserInfo', 'appUserInfo.allergies']
	});
	const allergies = appUser.appUserInfo.allergies;
	return { body: allergies };
};
