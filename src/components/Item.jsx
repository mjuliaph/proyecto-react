import ItemCount from "./ItemCount";
import sillon from "./../media/sillon.png";

function Item(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={sillon} className="card-img-top" alt="butaca" />
      <div className="card-body">
        <h4 className="card-title">{props.fila}</h4>
        <p className="card-text">{props.description}</p>
        <h5 className="card-title">{props.price}</h5>
        <ItemCount stock={5} initial={0} />
      </div>
    </div>
  );
}

export default Item;
