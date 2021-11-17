import { TextField, Button, Stack } from '@mui/material';
import { useState } from 'react';

const Login = ({ handleLoggingIn, handleLogin }) => {
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
			<p>Hello, please log in:</p>
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
			<Button onClick={() => handleLogin(formData)}>Submit</Button>
			<Button onClick={handleLoggingIn}>Sign Up</Button>
		</div>
	);
};

export default Login;
