import { Card, CardContent, Typography } from '@mui/material';

const FeedItemCard = ({ item }) => {

	return (

		<Card variant="outlined" sx={{ maxWidth: '250px', minWidth: '200px' }}>
				<CardContent>
				<Typography variant="h5">
					{' '}
					{item.item_name}{' '}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					${item.item_value}
				</Typography>
			</CardContent>
		</Card>
		
	);
};

export default FeedItemCard;
