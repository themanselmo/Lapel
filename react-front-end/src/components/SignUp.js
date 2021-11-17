import { TextField, Button } from '@mui/material';
import { useState } from 'react';

const SignUp = ({ handleLoggingIn, handleSignUp }) => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div style={{ textAlign: "center" }}>
			<h3>Welcome!</h3>
			<p>Hello, please sign up:</p>
			<ul>
				<TextField
					name="username"
					onChange={handleChange}
					placeholder={'username'}
					size="small"
					sx={{ maxWidth: "200px"}}
				></TextField>
				<TextField
					name="password"
					onChange={handleChange}
					placeholder={'password'}
					size="small"
					sx={{ maxWidth: "200px"}}
				></TextField>
			</ul>
			<Button onClick={() => handleSignUp(formData)}>Submit</Button>
			<Button onClick={handleLoggingIn}>Log In</Button>
		</div>
	);
};

export default SignUp;
