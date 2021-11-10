import { createConnection, Connection } from 'typeorm';

export function connectionToDatabase(): Promise<Connection> {
	const connection = createConnection({
		type: 'mysql',
		host: 'localhost',
		port: 3306,
		username: 'web_user',
		password: '1234',
		database: 'smart-dental',
		entities: ['./entity/**'],
		synchronize: true
	}).then((connection) => {
		// const titles = await checkTitles();
		return connection;
	});
	return connection;
}
