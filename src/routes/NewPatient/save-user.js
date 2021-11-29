import { AppUser } from '$lib/entity/AppUser';
import { Title } from '$lib/entity/Title';
import dayjs from 'dayjs';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const post = async ({ body }) => {
	const {
		id,
		firstName,
		lastName,
		cardNumber,
		mobile,
		email,
		title,
		gender,
		birthday,
		maritalStatus
	} = body;
	const titleCode = await Title.findOne({ code: title });

	let user = await AppUser.findOne(
		{ id },
		{
			select: ['id', 'firstName', 'lastName', 'cardNumber', 'mobile', 'email', 'title'],
			relations: ['appUserInfo', 'title']
		}
	);
	user.firstName = firstName;
	user.lastName = lastName;
	user.cardNumber = cardNumber;
	user.mobile = mobile;
	user.email = email;
	user.title = titleCode;
	user.appUserInfo.gender = gender;
	user.appUserInfo.birthday = dayjs(birthday).toDate();
	user.appUserInfo.maritalStatus = maritalStatus;
	user = await user.save();

	return { body: { user } };
};
