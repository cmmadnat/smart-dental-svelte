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
	appUser.firstName = firstName.substring(0, 50);
	appUser.lastName = lastName.substring(0, 50);
	appUser.mobile = mobile.substring(0, 10);
	appUser.IDCard = IDCard.substring(0, 1);
	appUser.cardNumber = cardNumber.substring(0, 13);
	appUser.email = email.substring(0, 50);
	appUser.password = bcrypt.hashSync(password, 10);
	return appUser;
};
