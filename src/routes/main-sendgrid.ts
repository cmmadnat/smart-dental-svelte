// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sgMail from '@sendgrid/mail';
import { AppUser } from '$lib/entity/AppUser';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const post = async ({ body }) => {
	const { email } = body;
	const to = email;
	const user = await AppUser.findOne({ email: to.toLowerCase() });
	if (user == null) return { body: { success: false } };

	const salt = Math.random().toString(36).slice(2);
	user.salt = salt;
	console.log(user);
	user.save();

	const link = import.meta.env.VITE_HOST_NAME + '/forgetPassword?key=' + salt;
	const msg = {
		to: to, // Change to your recipient
		from: 'cmmadnat@gmail.com', // Change to your verified sender
		subject: 'MU-Smart Dental Forgot Your Password? - ลืมรหัสผ่าน',
		text: 'Please go to ' + link + ' to reset your password',
		html: `กรุณาคลิ๊กที่ <a href=${link}>คลิ๊กที่นี่</a> เพื่อสร้างรหัสผ่านใหม่`
	};
	sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent');
		})
		.catch((error) => {
			console.error(error);
		});
	return { body: { success: true } };
};
