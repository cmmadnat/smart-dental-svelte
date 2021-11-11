// let title = '',
//   firstName = '',
//   lastName = '',
//   IDCard = '',
//   cardNumber = '',
//   mobile = '',
//   email = '',
//   password = '',
//   verifyPassword = '';

import { AppUser } from './entity/AppUser';
import { convertCodeToTitle } from './titleService';
import bcrypt from 'bcrypt';

export const transformAppUser = async (
	title: string,
	firstName: string,
	lastName: string,
	IDCard: string,
	cardNumber: string,
	mobile: string,
	email: string,
	password: string
): Promise<AppUser> => {
	const appUser = new AppUser();
	appUser.title = await convertCodeToTitle(title);
	appUser.firstName = firstName;
	appUser.lastName = lastName;
	appUser.mobile = mobile;
	appUser.IDCard = IDCard;
	appUser.cardNumber = cardNumber;
	appUser.email = email;
	appUser.password = bcrypt.hashSync(password, 10);
	return appUser;
};
