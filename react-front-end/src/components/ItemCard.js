
const ItemCard = ({ item }) => {

    return <div className="item-card">
        <p>{item.itemName}</p>
        <p>{item.itemClass}</p>
        <p>{item.price}</p>
    </div>

}

export default ItemCard