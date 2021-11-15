import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CollectionCard = ({ collection }) => {
	// onclick, takes you to CollectionDetail

  
	return (
		<div className="collection-card">
			<h3>${collection.name}</h3>
			<p>Total Items: ${collection.items.length}</p>
			<p>Total Value: summed item values</p>
			<Link to={collection.name}>
				<Button>View More</Button>
			</Link>
		</div>
	);
};

export default CollectionCard;
