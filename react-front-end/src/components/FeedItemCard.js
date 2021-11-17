import { Card, CardContent, Typography } from '@mui/material';

import { useState } from 'react';

const FeedItemCard = ({ item }) => {
	const [renderedItem, setRenderedItem] = useState(item);

	return (

		<Card variant="outlined" sx={{ maxWidth: '250px', minWidth: '200px' }}>
				<CardContent>
				<Typography variant="h5">
					{' '}
					{renderedItem.item_name}{' '}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					${renderedItem.item_value}
				</Typography>
			</CardContent>
		</Card>
		
	);
};

export default FeedItemCard;
