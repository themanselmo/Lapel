import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom'
import UserProfile from './UserProfile';
import Footer from './Footer';

function App() {
	// state variables
	const [loggingIn, setLoggingIn] = useState(true);
	const [loggedIn, setLoggedIn] = useState(false);
	// const [currentUser, setCurrentUser] = useState({});
	const navigate = useNavigate()
	// const mockUser = {
	// 	username: 'John',
	// 	password: '1234',
	// 	collections: [
	// 		{
	// 			name: 'Clothes',
	// 			items: [
	// 				{
	// 					itemName: 'Shirt',
	// 					itemClass: 'Clothes',
	// 					price: 10,
	// 				},
	// 				{
	// 					itemName: 'Shoes',
	// 					itemClass: 'Clothes',
	// 					price: 80,
	// 				},
	// 				{
	// 					itemName: 'Jacket',
	// 					itemClass: 'Clothes',
	// 					price: 15,
	// 				},
	// 			],
	// 		},
	// 	],
	// };

	const handleSignUp = (formData) => {
		
		const passedInUsername = formData.username.trim()
		const passedInPassword = formData.password.trim()
		
		if(passedInUsername === '' || passedInPassword === '' ) {
			alert("Please enter a valid username and password.")
		} else {
			const newUser = formData
			const configObj = {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify( newUser ),
			};

			fetch(`http://localhost:9292/user/new`, configObj)
				.then((res) => res.json())
				.catch((error) => console.log(error))
				.then((data) => {
					if(data === "User Exists") {
						alert("Username is taken")
					} else {
						// setCurrentUser(data)
						UserProfile.setName(data.username)
						setLoggedIn(true)
						navigate('/home')
					}
				})
		}
	}

	const handleLoggingIn = () => {
		// handles whether a user is logging in or signing up
		setLoggingIn(!loggingIn);
	};

	const handleLogin = (formData) => {
		// fetch to database of users checking to see if
		// user with given username exists, and if so check the passwords
		const passedInUsername = formData.username.trim()
		const passedInPassword = formData.password.trim()
		
		if(passedInUsername === '' || passedInPassword === '' ) {
			alert("Please enter a valid username and password.")
		} else {
			fetch(`http://localhost:9292/user/${passedInUsername}`)
			.then((res) => res.json())
			.then((data) => {
				if(data === null) {
					alert("Username or password is wrong.")
				} else {
					checkLogin(data, passedInUsername, passedInPassword)
				}	
			});
		}
		
	};

	// takes the data passed from the login form and fetches to the
	// database to see if an account with such username exits
	// if it exists, it checks the username and password and if it passes
	// sets the user to logged in and the currentuser state
	const checkLogin = (data, passedInUsername, passedInPassword) => {
		if (
			data.username === passedInUsername &&
			data.password === passedInPassword
		) {
					UserProfile.setName(data.username)
					setLoggedIn(true);
					navigate('/home')
		} else {
			alert('Wrong username or password.');
		}
	};


	// conditionally rendered state controlled component
	const loginForm = () =>
		loggingIn ? (
			<Login
				handleLoggingIn={handleLoggingIn}
				handleLogin={handleLogin}
			/>
		) : (
			<SignUp 
				handleLoggingIn={handleLoggingIn}
				handleSignUp={handleSignUp}
			/>
		);

	return (
		<div className="App">
			{loggedIn ? null : null}
			{loginForm()}
			<Footer />
		</div>
	);
}

export default App;
