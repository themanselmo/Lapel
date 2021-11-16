const ItemCard = ({ item }) => {
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
		</div>
	);
};

export default ItemCard;
