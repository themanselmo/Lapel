import { Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';

// import { DeleteIcon } from "@mui/icons-material/Delete";
import ItemCard from './ItemCard';
import NewItem from './NewItem';

const CollectionDetail = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [collection, setCollection] = useState({});
	const [manage, setManage] = useState(false);
	const [items, setItems] = useState([]);
	const navigate = useNavigate();

	// this will be a spinner waiting for the useEffect fetch

	// As this component renders for each collections, there will be
	// a slug at the end of the URL that we will be grabbing with the
	// useParams hook below.

	const { collectionId } = useParams();
	console.log({ collectionId });

	// useParams() grabs the slug, which will be an id number
	// we then fetch from the collections url passing in the
	// ID number gabbed by useParams, succesfully fetching our
	// required collection

	// make REST request with useEffect to fetch the

	console.log('b4 fetch');

	useEffect(() => {
		console.log('in fetch');
		fetch(`http://localhost:9292/collections/${collectionId}`)
			.then((r) => r.json())
			.then((data) => {
				console.log(data);
				setCollection(data);
				setItems(data.items);
				setIsLoaded(true);
			});
	}, []);

	const handleManage = (e) => setManage(!manage);

	const goHome = () => {
		navigate('/home')
	}

	const deleteItem = (doomedItem) => {
		console.log(doomedItem);
		fetch(`http://localhost:9292/items/${doomedItem.id}`, {
			method: 'DELETE',
		}).then((r) => r.json());
		const newArr = items.filter((el) => el.id !== doomedItem.id);
		setItems(newArr);
	};
	const addItemToItems = (freshItem) => {
		setItems([...items, freshItem]);
	};
	if (!isLoaded) {
		return <CircularProgress />;
	} else {
		return (
			<div className="collection-detail" style={{ textAlign: "center"}}>
				<Button onClick={goHome}>Return To Hub</Button>
				<Button onClick={handleManage}>Manage Collection</Button>
				<Button color="error">Delete Collection</Button>

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
					<p>Total Items: {collection.items.length}</p>
					<p>Total Value: total value</p>
				</div>

				<div className="collection-items" style={{ 
					alignItems: "center", 
					display: "flex",
					justifyContent: "space-evenly"
					}}>
					{items.map((item) => {
						return (
							<ItemCard
								item={item}
								manage={manage}
								deleteItem={deleteItem}
							/>
						);
						})}
				</div>
			</div>
			);
	}
};

export default CollectionDetail;
