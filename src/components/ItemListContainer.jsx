import "../css/index.css";

function ItemListContainer(props) {
  return (
    <div className="container-fluid lista">
      <p>{props.greeting}</p>
    </div>
  );
}

export default ItemListContainer;
