export const post = ({body})=>{
	const {username, password} = body
	console.log(username);
	console.log(password);
	if (username == 'cmmadnat'){
		return { body : { success: true } };
	}
	else {
		return { body : { success : false, message : 'userNotFoundOrWrongPassword' } };
	}
}
