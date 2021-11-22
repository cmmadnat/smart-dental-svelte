import { AppUser } from '$lib/entity/AppUser';
const LIMIT = 20;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const post = async ({ body }) => {
	const { query, page } = body;
	const list = await AppUser.findAndCount({
		select: ['firstName', 'lastName', 'cardNumber', 'id'],
		where: [{ mobile: query }, { firstName: query }, { lastName: query }],
		take: LIMIT,
		skip: (page - 1) * LIMIT
	});
	return { body: list };
};
