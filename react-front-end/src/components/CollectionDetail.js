import { Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

// import { DeleteIcon } from "@mui/icons-material/Delete";
import ItemCard from './ItemCard';

const CollectionDetail = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [collection, setCollection] = useState({});
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
				setIsLoaded(true);
			});
	}, []);

	if (!isLoaded) {
		return <CircularProgress />;
	} else {
		return (
			<div className="collection-detail" style={{ textAlign: "center"}}>
				<Button>Return To Hub</Button>
				<Button>Manage Collection</Button>
				<Button color="error">Delete Collection</Button>

				<div className="collection-overview">
					<h3>Overview</h3>
					<p>Total Items: {collection.items.length}</p>
					<p>Total Value: total value</p>
				</div>

				<div className="collection-items" style={{ 
					alignItems: "center", 
					display: "flex",
					justifyContent: "space-evenly"
					}}>
					{collection.items.map((item) => {
						console.log(item);
						return <ItemCard item={item} />;
					})}
				</div>
			</div>
		);
	}
};

export default CollectionDetail;
