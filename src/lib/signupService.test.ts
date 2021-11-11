import { connectionToDatabase } from './database';
import { transformAppUser } from './signupService';
import bcrypt from 'bcrypt';
import { getConnection } from 'typeorm';

beforeAll(async () => {
	await connectionToDatabase();
});
const title = '002',
	firstName = 'thitiwat',
	lastName = 'hemvimon',
	IDCard = '1',
	cardNumber = '1100500333162',
	mobile = '0818365575',
	email = 'cmmadnat@gmail.com',
	password = 'qwer1234',
	verifyPassword = 'qwer1234';
test('it should tranform appuser stream data to appuser object', async () => {
	const appUser = await transformAppUser(
		title,
		firstName,
		lastName,
		IDCard,
		cardNumber,
		mobile,
		email,
		password
	);
	expect(appUser.title.name).toBe('นาย');
	expect(appUser.firstName).toBe(firstName);
	expect(appUser.lastName).toBe(lastName);
	expect(appUser.IDCard).toBe(IDCard);
	expect(appUser.cardNumber).toBe(cardNumber);
	expect(appUser.mobile).toBe(mobile);
	return expect(appUser.email).toBe(email);
});

test('it should convert the password to bcrypt format', async () => {
	jest.setTimeout(30000);
	const appUser = await transformAppUser(
		title,
		firstName,
		lastName,
		IDCard,
		cardNumber,
		mobile,
		email,
		password,
		verifyPassword
	);
	return expect(await bcrypt.compare(password, appUser.password)).toBeTruthy();
});
afterAll(async () => {
	await getConnection().close();
});
