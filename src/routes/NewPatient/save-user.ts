import { AppUser } from '$lib/entity/AppUser';
import { Nationality } from '$lib/entity/Nationality';
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
		emergencyAddressType,
		addressLineOne,
		emergencyAddressLineOne,
		subdistrict,
		postalCode,
		emergencySubdistrict,
		emergencyPostalCode,
		emergencyContact,
		emergencyRelationship,
		homePhone,
		workPhone,
		fatherFirstname,
		fatherLastName,
		motherFirstname,
		motherLastName,
		sprouseFirstname,
		sprouseLastName
	} = body;
	const titleCode = await Title.findOne({ code: title });
	const religionCode =
		religion.length != 0 ? await Religion.findOne({ code: parseInt(religion) }) : null;
	const occupationCode = await Occupation.findOne({ thaiName: occupation });
	const nationalityCode = await Nationality.findOne({ id: nationality });

	let user = await AppUser.findOne(
		{ id },
		{
			select: ['id', 'firstName', 'lastName', 'cardNumber', 'mobile', 'email', 'title'],
			relations: [
				'appUserInfo',
				'title',
				'appUserInfo.emergencyAddress',
				'appUserInfo.address',
				'appUserInfo.fatherFamilyInfo',
				'appUserInfo.motherFamilyInfo',
				'appUserInfo.sprouseFamilyInfo',
				'appUserInfo.nationality'
			]
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
	user.appUserInfo.nationality = nationalityCode;
	user.appUserInfo.religion = religionCode;
	user.appUserInfo.organization = organization;
	user.appUserInfo.occupation = occupationCode;
	user.appUserInfo.expireDate = dayjs(expireDate).toDate();
	user.appUserInfo.address.addressType = addressType;
	user.appUserInfo.emergencyAddress.addressType = emergencyAddressType;
	user.appUserInfo.address.line1 = addressLineOne;
	user.appUserInfo.emergencyAddress.line1 = emergencyAddressLineOne;

	// subdistrict, postal code
	user.appUserInfo.address.subdistrict = subdistrict;
	user.appUserInfo.address.postalCode = postalCode;

	user.appUserInfo.emergencyAddress.subdistrict = emergencySubdistrict;
	user.appUserInfo.emergencyAddress.postalCode = emergencyPostalCode;
	//contact

	user.appUserInfo.emergencyName = emergencyContact;
	user.appUserInfo.emergencyRelationship = emergencyRelationship;
	user.appUserInfo.homePhone = homePhone;
	user.appUserInfo.workPhone = workPhone;

	user.appUserInfo.fatherFamilyInfo.firstName = fatherFirstname;
	user.appUserInfo.fatherFamilyInfo.lastName = fatherLastName;
	user.appUserInfo.motherFamilyInfo.firstName = motherFirstname;
	user.appUserInfo.motherFamilyInfo.lastName = motherLastName;
	user.appUserInfo.sprouseFamilyInfo.firstName = sprouseFirstname;
	user.appUserInfo.sprouseFamilyInfo.lastName = sprouseLastName;
	user = await user.save();

	return { body: { user } };
};
