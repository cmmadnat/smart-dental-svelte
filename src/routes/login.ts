interface LoginResponse {
	body: { success: boolean; message?: string };
}
export const post = ({ body }: { body: { username: string; password: string } }): LoginResponse => {
	const { username } = body;

	if (username == 'cmmadnat') {
		return { body: { success: true } };
	} else {
		return { body: { success: false, message: 'userNotFoundOrWrongPassword' } };
	}
};
