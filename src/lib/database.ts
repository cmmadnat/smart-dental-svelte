import { createConnection, Connection } from 'typeorm';
import { Address } from './entity/Address';
import { AppUser } from './entity/AppUser';
import { AppUserInfo } from './entity/AppUserInfo';
import { FamilyInfo } from './entity/FamilyInfo';
import { Occupation } from './entity/Occupation';
import { Religion } from './entity/Religion';
import { Title } from './entity/Title';

export function connectionToDatabase(): Promise<Connection> {
	const connection = createConnection({
		type: 'mysql',
		host: import.meta.env.VITE_DB_HOST,
		port: parseInt(import.meta.env.VITE_DB_PORT),
		username: import.meta.env.VITE_DB_USER,
		password: import.meta.env.VITE_DB_PASS,
		database: import.meta.env.VITE_DB_DATABASE,
		entities: [FamilyInfo, Religion, AppUserInfo, AppUser, Title, Address, Occupation],
		synchronize: true
	}).then((connection) => {
		// const titles = await checkTitles();
		return connection;
	});
	return connection;
}
