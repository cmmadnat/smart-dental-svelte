import { AppUser } from '$lib/entity/AppUser';
import bcrypt from 'bcrypt';

interface LoginResponse {
	body: { success: boolean; message?: string };
}
export const post = async ({
	body
}: {
	body: { username: string; password: string };
}): Promise<LoginResponse> => {
	const { username, password } = body;
	const user = await AppUser.findOne({ email: username });
	if (!user) {
		return { body: { success: false, message: 'userNotFoundOrWrongPassword' } };
	} else {
		if (!bcrypt.compareSync(password, user.password))
			return { body: { success: false, message: 'userNotFoundOrWrongPassword' } };
		return { body: { success: true } };
	}
};
