import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import image from '../assets/signup.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const SignUp = ({ handleLoggingIn, handleSignUp }) => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className="login-container" style={{ textAlign: 'center' }}>
			<img
				src={image}
				style={{ maxWidth: '300px', paddingTop: '67px' }}
			/>
			<h3 className="login-greeting">Welcome!</h3>
			<p className="login-instructions">Hello, please sign up:</p>
			<div style={{ padding: '10px' }}>
				<ul>
					<TextField
						name="username"
						onChange={handleChange}
						placeholder={'username'}
						size="small"
						sx={{ maxWidth: '200px' }}
					></TextField>{' '}
					<TextField
						name="password"
						onChange={handleChange}
						placeholder={'password'}
						type="password"
						size="small"
						sx={{ maxWidth: '200px' }}
					></TextField>
				</ul>
			</div>
			<Button
				className="login-buttons"
				variant="contained"
				onClick={() => handleSignUp(formData)}
			>
				Submit
			</Button>{' '}
			<Button
				className="login-buttons"
				variant="contained"
				onClick={handleLoggingIn}
			>
				Log In
			</Button>
		</div>
	);
};

export default SignUp;
