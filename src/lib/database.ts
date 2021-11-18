import { createConnection, Connection } from 'typeorm';
import { AppUser } from './entity/AppUser';
import { Title } from './entity/Title';

export function connectionToDatabase(): Promise<Connection> {
	const connection = createConnection({
		type: 'mysql',
		host: import.meta.env.VITE_DB_HOST,
		port: parseInt(import.meta.env.VITE_DB_PORT),
		username: import.meta.env.VITE_DB_USER,
		password: import.meta.env.VITE_DB_PASS,
		database: import.meta.env.VITE_DB_DATABASE,
		entities: [AppUser, Title],
		synchronize: true
	}).then((connection) => {
		// const titles = await checkTitles();
		return connection;
	});
	return connection;
}
