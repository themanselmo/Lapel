import { TextField, Button } from '@mui/material';

const SignUp = ({ handleLoggingIn }) => {
	return (
		<div>
			<h3>Welcome!</h3>
			<p>Hello, please sign up:</p>
			<TextField></TextField>
			<TextField></TextField>

			<Button>Submit</Button>
			<Button onClick={handleLoggingIn}>Log In</Button>
		</div>
	);
};

export default SignUp;
