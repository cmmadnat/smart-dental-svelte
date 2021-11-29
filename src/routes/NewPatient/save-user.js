import { AppUser } from '$lib/entity/AppUser';
import { Occupation } from '$lib/entity/Occupation';
import { Religion } from '$lib/entity/Religion';
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
		idType,
		gender,
		birthday,
		maritalStatus,
		nationality,
		religion,
		occupation,
		organization,
		expireDate,
		// address
		addressType,
		emergencyAddressType
	} = body;
	const titleCode = await Title.findOne({ code: title });
	const religionCode = await Religion.findOne({ code: parseInt(religion) });
	const occupationCode = await Occupation.findOne({ name: occupation });

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
	user.IDCard = idType;
	user.appUserInfo.gender = gender;
	user.appUserInfo.birthday = dayjs(birthday).toDate();
	user.appUserInfo.maritalStatus = maritalStatus;
	user.appUserInfo.nationality = nationality;
	user.appUserInfo.religion = religionCode;
	user.appUserInfo.organization = organization;
	user.appUserInfo.occupation = occupationCode;
	user.appUserInfo.expireDate = dayjs(expireDate).toDate();
	user.appUserInfo.addressType = addressType;
	user.appUserInfo.emergencyAddressType = emergencyAddressType;
	user = await user.save();

	return { body: { user } };
};
