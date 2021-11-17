import React from 'react'
import { Button, CircularProgress, Snackbar, Grow } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// import { DeleteIcon } from "@mui/icons-material/Delete";
import ItemCard from './ItemCard';
import NewItem from './NewItem';

const CollectionDetail = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [collection, setCollection] = useState({});
	const [manage, setManage] = useState(false);
	const [items, setItems] = useState([]);
	const navigate = useNavigate();

	const [open, setOpen] = useState(false)
	const [transition, setTransition] = useState(Grow);
	const [alertMessage, setAlertMessage] = useState('')
	// this will be a spinner waiting for the useEffect fetch

	// As this component renders for each collections, there will be
	// a slug at the end of the URL that we will be grabbing with the
	// useParams hook below.

	const { collectionId } = useParams();

	// useParams() grabs the slug, which will be an id number
	// we then fetch from the collections url passing in the
	// ID number gabbed by useParams, succesfully fetching our
	// required collection

	// make REST request with useEffect to fetch the

	useEffect(() => {
		console.log("use effect hit")
		fetch(`http://localhost:9292/collections/${collectionId}`)
			.then((r) => r.json())
			.then((data) => {
				setCollection(data);
				setItems(data.items);
				setIsLoaded(true);
			});
	}, [collectionId]);

	const handleManage = (e) => setManage(!manage);

	const goHome = () => {
		navigate('/home');
	};

	const updateItems = (doomedItem) => {
		// const updatedItems = items.filter(
		// 	(el) => el.id !== doomedItem.id
		// );
		// console.log(updatedItems)
		setItems((prevItems) => {
			const updatedItems = prevItems.filter(
				(el) => el.id !== doomedItem.id
			);
			return updatedItems
		});
	}

	const deleteItem = (doomedItem) => {
		console.log(doomedItem);
		fetch(`http://localhost:9292/items/${doomedItem.id}`, {
			method: 'DELETE',
		})
		updateItems(doomedItem)
		setAlertMessage('Item Deleted!')
		handleClick(Grow)
	};

	const addItemToItems = (freshItem) => {
		setItems([...items, freshItem]);
		setAlertMessage('Item Added!')
		handleClick(Grow)
	};

	const handleClose = () => {
		setOpen(false)
	};

	const handleClick = (transition) => {
		setOpen(true)
		setTransition(transition)
	}

	const sumItems = (items) => {
		let sum = 0
		items.forEach(item => sum += item.item_value)
		return sum
	}

	if (!isLoaded) {
		return <CircularProgress />;
	} else {

		console.log(items)
		return (
			<div className="collection-detail" style={{ textAlign: 'center' }}>
				<Button onClick={goHome}>Return To Hub</Button>
				<Button onClick={handleManage}>Manage Collection</Button>

				<div className="collection-overview">
					<h3>Overview</h3>
					<h2>{collection.collection_name}</h2>
					<div>
						{manage ? (
							<NewItem
								collection={collection}
								addItemToItems={addItemToItems}
							/>
						) : null}
					</div>
					<p>Total Items: {items.length}</p>
					<p>Total Value: ${sumItems(items)}</p>
				</div>

				<div
					className="collection-items"
					style={{
						alignItems: 'center',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-evenly',
					}}
				>
					{items.map((item) => {
						console.log("Rendering items..........")
						return (
							<ItemCard
								key={item.id}
								item={item}
								manage={manage}
								deleteItem={deleteItem}
							/>
						);
					})}
				</div>
		
				<Snackbar
					open={open}
					onClose={handleClose}
					TransitionComponent={transition}
					autoHideDuration={2000}
					// message="Item Deleted!"
					key={transition.name}
				>
					<MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }} >
						{alertMessage}
					</MuiAlert>
				</Snackbar>
			</div>
		);
	}
};

export default CollectionDetail;
