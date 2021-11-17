import { Button, Card, CardContent, Typography } from '@mui/material';

import { useState } from 'react';

const ItemCard = ({ item, manage, deleteItem }) => {
	const [renderedItem, setRenderedItem] = useState(item);
	const [edit, setEdit] = useState(false);
	const [itemForm, setItemForm] = useState({
		item_name: '',
		item_value: '',
	});

	const handleDelete = () => {
		deleteItem(item);
	};

	const handleEdit = () => {
		console.log(item);
		setEdit(!edit);
		setItemForm({
			item_name: renderedItem.item_name,
			item_value: renderedItem.item_value,
		});
	};

	const handleForm = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setItemForm({ ...itemForm, [name]: value });
	};
	console.log(itemForm);

	const handleUpdate = (e) => {
		setEdit(!edit);
		e.preventDefault();
		fetch(`http://localhost:9292/items/${item.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				item_name: itemForm.item_name,
				item_value: itemForm.item_value,
			}),
		})
			.then((r) => r.json())
			.then((patchedItem) => setRenderedItem(patchedItem));
	};

	console.log(renderedItem);
	return (

		<Card variant="outlined" sx={{ maxWidth: '250px', minWidth: '200px' }}>
			{edit ? (
				<form>
					<label>Item Name:</label>
					<input
						onChange={handleForm}
						name="item_name"
						type="text"
						value={itemForm.item_name}
						defaultValue={renderedItem.item_name}
					></input>{' '}
					<br></br>
					<label>Price:</label>
					<input
						onChange={handleForm}
						name="item_value"
						type="text"
						value={itemForm.item_value}
						defaultValue={renderedItem.item_value}
					></input>{' '}
				</form>
			) : (
				<CardContent>
				<Typography variant="h5">
					{' '}
					{renderedItem.item_name}{' '}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					${renderedItem.item_value}
				</Typography>
			</CardContent>
			)}

			{manage ? (
				<div>
					<Button
						onClick={handleDelete}
						variant="outlined"
						color="error"
					>
						{' '}
						Delete
					</Button>
					{!edit ? (
						<Button
							onClick={handleEdit}
							variant="outlined"
							color="success"
						>
							{' '}
							Edit
						</Button>
					) : (
						<Button
							onClick={handleUpdate}
							variant="outlined"
							color="success"
						>
							{' '}
							Update
						</Button>
					)}
				</div>
			) : null}
		</Card>

		// <div
		// 	className="item-card"
		// 	style={{
		// 		borderRadius: '25px 25px 25px 25px',
		// 		borderStyle: 'outset',
		// 		borderColor: 'black',
		// 		maxWidth: '250px',
		// 		minWidth: '250px',
		// 		textAlign: 'center',
		// 	}}
		// >
		// 	{edit ? (
		// 		<form>
		// 			<label>Item Name:</label>
		// 			<input
		// 				onChange={handleForm}
		// 				name="item_name"
		// 				type="text"
		// 				value={itemForm.item_name}
		// 				defaultValue={renderedItem.item_name}
		// 			></input>{' '}
		// 			<br></br>
		// 			<label>Price:</label>
		// 			<input
		// 				onChange={handleForm}
		// 				name="item_value"
		// 				type="text"
		// 				value={itemForm.item_value}
		// 				defaultValue={renderedItem.item_value}
		// 			></input>{' '}
		// 		</form>
		// 	) : (
		// 		<div>
		// 			{' '}
		// 			<p>{renderedItem.item_name}</p>
		// 			<p>{renderedItem.item_value}</p>
		// 		</div>
		// 	)}

		// 	{manage ? (
		// 		<div>
		// 			<Button
		// 				onClick={handleDelete}
		// 				variant="outlined"
		// 				color="error"
		// 			>
		// 				{' '}
		// 				Delete
		// 			</Button>
		// 			{!edit ? (
		// 				<Button
		// 					onClick={handleEdit}
		// 					variant="outlined"
		// 					color="success"
		// 				>
		// 					{' '}
		// 					Edit
		// 				</Button>
		// 			) : (
		// 				<Button
		// 					onClick={handleUpdate}
		// 					variant="outlined"
		// 					color="success"
		// 				>
		// 					{' '}
		// 					Update
		// 				</Button>
		// 			)}
		// 		</div>
		// 	) : null}
		// </div>
	);
};

export default ItemCard;
