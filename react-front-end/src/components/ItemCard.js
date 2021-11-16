const ItemCard = ({ item }) => {
	return (
		<div className="item-card">
			<p>{item.item_name}</p>
			<p>{item.item_class}</p>
			<p>{item.item_value}</p>
		</div>
	);
};

export default ItemCard;
