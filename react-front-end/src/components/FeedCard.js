import { Button, Card, CardContent, Typography, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeedCard = ({ collection }) => {
	const [cardOwner, setCardOwner] = useState('max');

	useEffect(() => {
		fetch(`http://localhost:9292/user/id/${collection.user_id}`)
			.then((res) => res.json())
			.then((data) => {
				setCardOwner(data);
			});
	});

	return (
		<Paper
			elevation={12}
			style={{
				border: 'solid',
				borderRadius: '20',
				borderColor: '#e5e6e4',
			}}
			sx={{
				maxWidth: '250px',
				minWidth: '250px',
				maxHeight: '250px',
				minHeight: '250px',
				margin: '20px',
			}}
		>
			<CardContent>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					Collection Owner: {cardOwner}
				</Typography>
				<Typography variant="h5">
					{' '}
					{collection.collection_name}{' '}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					Total Items: {collection.items.length}
				</Typography>
			</CardContent>
			<Link to={`/feed/collections/${collection.id}`}>
				<Button sx={{ textAlign: 'center' }}>View More</Button>
			</Link>
		</Paper>
	);
};

export default FeedCard;
