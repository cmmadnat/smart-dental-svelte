import 'reflect-metadata';
import { connectionToDatabase } from '$lib/database';

import type { Handle } from '@sveltejs/kit/types/hooks';
import setupTitles from '$lib/setupTitles';
import { getConnection } from 'typeorm';
import setupReligions from '$lib/setupReligions';

export const handle: Handle = ({ request, resolve }) => {
	try {
		getConnection();
	} catch (e) {
		console.log('Connecting to database...');
		connectionToDatabase()
			.then(async () => {
				await setupTitles();
				await setupReligions();
			})
			.then(() => console.log('database connected'));
	}
	return resolve(request);
};
