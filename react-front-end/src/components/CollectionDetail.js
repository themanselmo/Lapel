import { Button } from "@mui/material";
// import { DeleteIcon } from "@mui/icons-material/Delete";
import ItemCard from "./ItemCard";

const CollectionDetail = ({ collection }) => {

	return <div className="collection-detail">
		<Button>Return To Hub</Button>
		<Button>Manage Collection</Button>
		<Button color="error" >Delete Collection</Button>

		<div className="collection-overview">
			<h3>Overview</h3>
			<p>Total Items: {collection.items.length}</p>
			<p>Total Value: total value</p>
		</div>

		<div className="collection-items">
			{collection.items.map(item => <ItemCard item={item} />)}
		</div>
		
	</div>;
};

export default CollectionDetail;
