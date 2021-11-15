import { TextField, Button } from '@mui/material';
import { useState } from 'react';

const Login = ({ handleLoggingIn, handleLogin }) => {

	const [formData, setFormData] = useState({
		username: '',
		password: ''
	})

	const handleChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value})
	}

	return (
		<div>
			<h3>Welcome!</h3>
			<p>Hello, please log in:</p>
			<TextField name="username" onChange={handleChange} placeholder={"username"}></TextField>
			<TextField name="password" onChange={handleChange} placeholder={"password"}></TextField>
			<Button onClick={()=>handleLogin(formData)}>Submit</Button>
			<Button onClick={handleLoggingIn}>Sign Up</Button>
		</div>
	);
};

export default Login;
