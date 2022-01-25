import { Title } from '$lib/entity/Title';
import type { ServerResponse } from '@sveltejs/kit/types/hooks';

export const get = async (): Promise<ServerResponse> => {
	const titles = await Title.find({});
	return {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		body: titles
	};
};
