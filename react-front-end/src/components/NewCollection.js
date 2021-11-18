import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const NewCollection = ({ addNewCollection, user }) => {
	const [name, setName] = useState('');

	const stuff = {
		name: name,
		user_id: user.id,
	};

	const configObj = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(stuff),
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// make post to create a new collection
		fetch('http://localhost:9292/collections', configObj)
			.then((res) => res.json())
			.then((collection) => addNewCollection(collection));
	};

	return (
		<div style={{ marginTop: 20, textAlign: 'center' }}>
			<Typography variant="h6">Add a new collection:</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					size="small"
					id="name"
					type="text"
					name="name"
					value={name}
					placeholder="Name"
					onChange={(e) => setName(e.target.value)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</div>
	);
};

export default NewCollection;
