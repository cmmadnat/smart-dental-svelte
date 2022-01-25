import { Religion } from '$lib/entity/Religion';
import type { ServerResponse } from '@sveltejs/kit/types/hooks';

export const get = async (): Promise<ServerResponse> => {
	const religions = await Religion.find({});
	return {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		body: religions
	};
};
