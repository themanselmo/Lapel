import { CardContent, Typography, Paper } from '@mui/material';

const FeedItemCard = ({ item }) => {
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
				maxHeight: '150px',
				minHeight: '150px',
				margin: '20px',
			}}
		>
			<CardContent
				style={{
					marginTop: 'auto',
					marginBottom: 'auto',
					textAlign: 'center',
				}}
			>
				<Typography variant="h5"> {item.item_name} </Typography>
				<Typography
					sx={{
						mb: 1.5,
					}}
					color="text.secondary"
				>
					${item.item_value}
				</Typography>
			</CardContent>
		</Paper>
	);
};

export default FeedItemCard;
