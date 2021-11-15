import {Button} from "@mui/material"

const CollectionCard = ({ collection, setShowDetail }) => {
	// onclick, takes you to CollectionDetail

	const totalValue = () => {
		let sum = 0;
		collection.items.forEach(item => sum += item.price)
		return sum
	}

	return <div className="collection-card">
		<h3>{collection.name}</h3>
		<p>Total Items: {collection.items.length}</p>
		<p>Total Value: ${totalValue()}</p>
		<Button>View More</Button>
	</div>;
};

export default CollectionCard;
