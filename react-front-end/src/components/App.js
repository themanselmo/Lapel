import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import MainHub from './MainHub';

function App() {
	const [loggingIn, setLoggingIn] = useState(true);
	const [loggedIn, setLoggedIn] = useState(false)

	const mockUser = {
		username: 'John',
		password: '1234',
		collections: [
			{
				name: 'Clothes',
				items: [
					{
						itemName: 'Shirt',
						itemClass: 'Clothes',
						price: 10,
					},
					{
						itemName: 'Shoes',
						itemClass: 'Clothes',
						price: 80,
					},
					{
						itemName: 'Jacket',
						itemClass: 'Clothes',
						price: 15,
					},
				],
			},
		],
	};

	const handleLoggingIn = () => {
		setLoggingIn(!loggingIn);
	};

	const handleLogin = (formData) => {
		// fetch to database of users checking to see if 
		// user with given username exists, and if so check the passwords
		if(formData.username === mockUser.username && formData.password === mockUser.password) {
			setLoggedIn(true)
		}
		else {
			alert("wrong username or password")
			console.log(formData)
		}
	}

	const loginForm = () => loggingIn ? 
		<Login handleLoggingIn={handleLoggingIn} handleLogin={handleLogin}/> 
		:
		<SignUp handleLoggingIn={handleLoggingIn} />


	return (
		<div className="App">
			{loggedIn ? <MainHub user={mockUser}/> : loginForm()}
			
			{/* {loggingIn ? (
				<Login handleLoggingIn={handleLoggingIn} handleLogin={handleLogin}/>
			) : (
				<SignUp handleLoggingIn={handleLoggingIn} />
			)} */}
		</div>
	);
}

export default App;
