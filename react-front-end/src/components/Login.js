import { TextField, Button } from '@mui/material';

const Login = ({ handleLoggingIn }) => {
	return (
		<div>
			<h3>Welcome!</h3>
			<p>Hello, please log in:</p>
			<TextField></TextField>
			<TextField></TextField>
			<Button>Submit</Button>
			<Button onClick={handleLoggingIn}>Sign Up</Button>
		</div>
	);
};

export default Login;
