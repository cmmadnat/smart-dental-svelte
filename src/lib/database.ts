import { createConnection, Connection } from 'typeorm';
import { AppUser } from './entity/AppUser';

export function connectionToDatabase(): Promise<Connection> {
	const connection = createConnection({
		type: 'mysql',
		host: 'localhost',
		port: 3306,
		username: 'web_user',
		password: '1234',
		database: 'smart-dental',
		entities: [AppUser],
		synchronize: true
	});
	return connection;
}
