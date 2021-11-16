import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CollectionCard = ({ collection }) => {
	// onclick, takes you to CollectionDetail

	const totalValue = () => {
		let sum = 0;
		collection.items.forEach((item) => (sum += item.price));
		return sum;
	};

	return (
		<div className="collection-card">
			<h3>{collection.name}</h3>
			<p>Total Items: {collection.items.length}</p>
			<p>Total Value: ${totalValue()}</p>
			<Link to={`/collections/${collection.id}`}>
				<Button>View More</Button>
			</Link>
		</div>
	);
};

export default CollectionCard;
