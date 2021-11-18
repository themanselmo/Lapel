import { TextField, Button, Paper } from '@mui/material';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/material';
import image from '../assets/welcome.png'
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
		<div className="login-container" style={{ textAlign: 'center'  }}>
			<img src={image} style={{ maxWidth: '300px'}}/>
			<h3 className="login-greeting">Welcome!</h3>
			<p className="login-instructions">Hello, please log in:</p>
			<div style={{ padding: '10px'}}>
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
			</div>
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
