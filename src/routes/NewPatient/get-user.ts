import { Address } from '$lib/entity/Address';
import { AppUser } from '$lib/entity/AppUser';
import { AppUserInfo } from '$lib/entity/AppUserInfo';
import { FamilyInfo } from '$lib/entity/FamilyInfo';
import { Title } from '$lib/entity/Title';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const post = async ({ body }) => {
	const { id } = body;
	if (id.toLowerCase() === 'new') {
		const user = new AppUser();
		user.title = new Title();
		const appUserInfo = new AppUserInfo();
		appUserInfo.birthday = new Date();
		appUserInfo.expireDate = new Date();

		user.appUserInfo = appUserInfo;

		return { body: { user } };
	}

	let user = await AppUser.findOne(
		{ id },
		{
			select: ['id', 'firstName', 'IDCard', 'lastName', 'cardNumber', 'mobile', 'email', 'title'],
			relations: [
				'appUserInfo',
				'title',
				'appUserInfo.emergencyAddress',
				'appUserInfo.address',
				'appUserInfo.religion',
				'appUserInfo.occupation',
				'appUserInfo.fatherFamilyInfo',
				'appUserInfo.motherFamilyInfo',
				'appUserInfo.sprouseFamilyInfo',
				'appUserInfo.nationality'
			]
		}
	);
	if (user.appUserInfo == null) {
		user.appUserInfo = new AppUserInfo();
		user.appUserInfo.birthday = new Date();
		user.appUserInfo.expireDate = new Date();
		user.appUserInfo.address = new Address();
		user.appUserInfo.emergencyAddress = new Address();
		user.appUserInfo.fatherFamilyInfo = new FamilyInfo();
		user.appUserInfo.motherFamilyInfo = new FamilyInfo();
		user.appUserInfo.sprouseFamilyInfo = new FamilyInfo();
		user = await user.save();
	}
	return { body: { user } };
};
