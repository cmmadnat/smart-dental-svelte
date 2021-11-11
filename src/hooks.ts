import 'reflect-metadata';
import { connectionToDatabase } from '$lib/database';

import type { Handle } from '@sveltejs/kit/types/hooks';
import setupTitles from '$lib/setupTitles';

export const handle: Handle = ({ request, resolve }) => {
	console.log('Connecting to database...');
	connectionToDatabase()
		.then(async () => {
			await setupTitles();
		})
		.then(() => console.log('database connected'));
	return resolve(request);
};
