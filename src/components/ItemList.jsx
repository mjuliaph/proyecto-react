import Item from "./Item";
import "./../style/index.css";


function ItemList({products}) {
    return (
        <div className= "container-fluid flex">
            {products.map ((item) => (<Item {...item} key={item.id}/>
            ))}
        </div>
    )
};

export default ItemList;