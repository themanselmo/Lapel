import { Button } from '@mui/material';

const ItemCard = ({ item, manage, deleteItem }) => {
	const handleDelete = (e) => {
		deleteItem(item);
	};
	return (
		<div className="item-card" style={{
			borderRadius: "25px 25px 25px 25px",
    		borderStyle: "outset",
    		borderColor: "black",
			maxWidth: "250px",
			minWidth:"250px",
			textAlign: "center"
		}}>
			<p>{item.item_name}</p>
			<p>{item.item_class}</p>
			<p>{item.item_value}</p>
			{manage ? (
				<div>
					<Button
						onClick={handleDelete}
						variant="outlined"
						color="error"
					>
						{' '}
						Delete
					</Button>
					<Button
						onClick={handleDelete}
						variant="outlined"
						color="success"
					>
						{' '}
						Edit
					</Button>
				</div>
			) : null}
		</div>
	);
};

export default ItemCard;
