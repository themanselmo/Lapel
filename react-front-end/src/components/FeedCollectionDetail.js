import { Button, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// import { DeleteIcon } from "@mui/icons-material/Delete";
import FeedItemCard from './FeedItemCard';

const FeedCollectionDetail = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [collection, setCollection] = useState({});
	const [items, setItems] = useState([]);
	const navigate = useNavigate();

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


	const goBack = () => {
		navigate('/feed');
	};

	if (!isLoaded) {
		return <CircularProgress />;
	} else {

		console.log(items)
		return (
			<div className="collection-detail" style={{ textAlign: 'center' }}>
				<Button onClick={goBack}>Return To Feed</Button>

				<div className="collection-overview">
					<Typography variant="h6" style={{ padding: '10px' }}>
						Overview
					</Typography>
					<Typography variant="h4" style={{ padding: '10px' }}>
						{collection.collection_name}
					</Typography>
					<Typography variant="subtitle1">
						Total Items: {collection.items.length}
					</Typography>
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
							<FeedItemCard
								key={item.id}
								item={item}
							/>
						);
					})}
				</div>
			</div>
		);
	}
};

export default FeedCollectionDetail;
