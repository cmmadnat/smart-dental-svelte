import { AppUser } from '$lib/entity/AppUser';
import bcrypt from 'bcrypt';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const post = async ({ body }) => {
	const { key, password } = body;

	const user = await AppUser.findOne({ salt: key });
	if (!user) {
		return {
			body: { success: false, message: 'Key not found' }
		};
	}
	user.password = bcrypt.hashSync(password, 10);
	user.save();

	return {
		body: { sucess: true }
	};
};
