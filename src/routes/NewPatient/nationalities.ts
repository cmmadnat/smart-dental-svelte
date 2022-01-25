import { Nationality } from '$lib/entity/Nationality';
import type { ServerResponse } from '@sveltejs/kit/types/hooks';

export const get = async (): Promise<ServerResponse> => {
	const nationalities = await Nationality.find({});
	return {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		body: nationalities
	};
};
