import { Button, Card, CardContent, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CollectionCard = ({
	collection,
	deletingCollections,
	deleteCollection,
}) => {
	// onclick, takes you to CollectionDetail

	const totalValue = () => {
		let sum = 0;
		collection.items.forEach((item) => (sum += item.item_value));
		return sum.toFixed(2);
	};

	return (
		<Paper
			elevation={12}
			style={{
				// backgroundColor: '#f0efeb',
				border: 'solid',
				borderRadius: '20',
				borderColor: '#e5e6e4',
				maxWidth: '250px',
				minWidth: '250px',
				maxHeight: '250px',
				minHeight: '250px',
				margin: '20px',
			}}
			sx={{ maxWidth: '250px', minWidth: '200px', height: '200px' }}
		>
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
			{deletingCollections ? (
				<Button
					size="small"
					variant="contained"
					color="error"
					onClick={() => deleteCollection(collection)}
				>
					Delete
				</Button>
			) : null}
		</Paper>
	);
};

export default CollectionCard;
