import { TextField, Button, Stack } from '@mui/material';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/material';

// const useStyles = makeStyles({
// 	btn: {
// 		fontSize: 60,
// 		backgroundColor: 'violet',
// 	},
// });

const Login = ({ handleLoggingIn, handleLogin }) => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className="login-container" style={{ textAlign: 'center' }}>
			<h3 className="login-greeting">Welcome!</h3>
			<p className="login-instructions">Hello, please log in:</p>
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
					size="small"
					sx={{ maxWidth: '200px' }}
				></TextField>
			</ul>
			<Button
				// theme={theme}
				className="login-buttons"
				variant="contained"
				onClick={() => handleLogin(formData)}
			>
				Submit
			</Button>{' '}
			<Button
				// theme={theme}
				className="login-buttons"
				variant="contained"
				onClick={handleLoggingIn}
			>
				Sign Up
			</Button>
		</div>
	);
};

export default Login;
