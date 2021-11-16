import { Button, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CollectionCard = ({ collection, deletingCollections, deleteCollection }) => {
	// onclick, takes you to CollectionDetail

	const totalValue = () => {
		let sum = 0;
		collection.items.forEach((item) => (sum += item.item_value));
		return sum;
	};

	return (
		<Card variant="outlined" sx={{ maxWidth: '250px', minWidth: '200px' }}>
			<CardContent>
				<Typography variant="h5">
					{' '}
					{collection.collection_name}{' '}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					Total Items: {collection.items.length}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					Total Value: ${totalValue()}
				</Typography>
			</CardContent>
			<Link to={`/collections/${collection.id}`}>
				<Button sx={{ textAlign: 'center' }}>View More</Button>
			</Link>
			{ deletingCollections ? <Button size="small" variant="contained" color="error" onClick={() => deleteCollection(collection)}>Delete</Button> : null }
		</Card>
	);
};

export default CollectionCard;
