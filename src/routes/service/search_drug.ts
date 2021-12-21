import { Drug } from '$lib/entity/Drug';
import type { RequestHandler } from '@sveltejs/kit/types/endpoint';
import { ILike } from 'typeorm';

interface Input {
	query: string;
	limit: number | undefined;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const post: RequestHandler<unknown, Input, Drug[]> = async ({ body }) => {
	const { query, limit } = body;

	const result = await Drug.find({
		where: {
			name: ILike(`%${query}%`)
		},
		select: ['id', 'name'],
		take: limit ? limit : 10
	});
	const filteredResult = [];
	const addedName = [];
	result.forEach((it) => {
		if (addedName.indexOf(it.name) === -1) {
			filteredResult.push(it);
			addedName.push(it.name);
		}
	});

	return {
		body: filteredResult
	};
};
