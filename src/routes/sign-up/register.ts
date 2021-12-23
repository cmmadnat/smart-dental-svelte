/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { transformAppUser } from '$lib/signupService';
export const post = async ({ body }) => {
	const { title, firstName, lastName, IDCard, cardNumber, mobile, email, password } = body;

	const result = await transformAppUser(
		title,
		firstName,
		lastName,
		IDCard,
		cardNumber,
		mobile,
		email,
		password
	).then((user) => {
		return user.save();
	});
	return {
		body: { result, success: true }
	};
};
