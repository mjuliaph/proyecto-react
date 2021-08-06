import "../css/index.css"

function ItemListContainer(props) {
    return (
        <div className="container">
            <p>{props.greeting}</p>
        </div>
    )
}

export default ItemListContainer;