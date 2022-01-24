import { Occupation } from '$lib/entity/Occupation';
import type { ServerResponse } from '@sveltejs/kit/types/hooks';

export const get = async (): Promise<ServerResponse> => {
	const occupations = await Occupation.find({});
	return {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		body: occupations
	};
};
