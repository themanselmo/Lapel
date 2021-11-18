import { useState } from 'react';
import { Button } from '@mui/material';

const NewItem = ({ collection, addItemToItems }) => {
	const [itemName, setItemName] = useState('');
	const [itemValue, setItemValue] = useState(null);

	// const [items, setItems] = useState(collection.items);
	const item = {
		name: itemName,
		item_class: collection.collection_name,
		item_value: itemValue,
		collection_id: collection.id,
	};

	const configObj = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(item),
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// post new item to collection
		fetch('http://localhost:9292/items', configObj)
			.then((r) => r.json())
			.then((freshItem) => addItemToItems(freshItem));
		e.target.reset();
	};

	return (
		<div>
			<h3>Add a new Item</h3>
			<form onSubmit={handleSubmit}>
				<ul style={{ listStyle: 'none' }}>
					<li>
						<label name="itemName">Item Name:</label>
						<input
							id="itemName"
							type="text"
							onChange={(e) => setItemName(e.target.value)}
						/>
					</li>
					<li>
						<label name="itemvalue">Item Value:</label>
						<input
							id="itemValue"
							type="text"
							onChange={(e) => setItemValue(e.target.value)}
						/>
					</li>
				</ul>
				<Button type="submit">Submit</Button>
			</form>
		</div>
	);
};

export default NewItem;
