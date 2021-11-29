import { Address } from '$lib/entity/Address';
import { AppUser } from '$lib/entity/AppUser';
import { AppUserInfo } from '$lib/entity/AppUserInfo';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const post = async ({ body }) => {
	const { id } = body;

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
				'appUserInfo.occupation'
			]
		}
	);
	if (user.appUserInfo == null) {
		user.appUserInfo = new AppUserInfo();
		user.appUserInfo.birthday = new Date();
		user.appUserInfo.expireDate = new Date();
		user.appUserInfo.address = new Address();
		user.appUserInfo.emergencyAddress = new Address();
		user = await user.save();
	}
	return { body: { user } };
};
