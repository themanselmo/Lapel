import Button from "@mui/material"

const CollectionCard = ({ collection }) => {
	// onclick, takes you to CollectionDetail
	return <div className="collection-card">
		<h3>${collection.name}</h3>
		<p>Total Items: ${collection.items.length}</p>
		<p>Total Value: summed item values</p>
		<Button>View More</Button>
	</div>;
};

export default CollectionCard;
