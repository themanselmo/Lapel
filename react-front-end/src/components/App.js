import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

function App() {
	const [loggingIn, setLoggingIn] = useState(true);

	const mockUser = {
		userName: 'John',
		password: 1234,
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
	return (
		<div className="App">
			{loggingIn ? (
				<Login handleLoggingIn={handleLoggingIn} />
			) : (
				<SignUp handleLoggingIn={handleLoggingIn} />
			)}
		</div>
	);
}

export default App;
