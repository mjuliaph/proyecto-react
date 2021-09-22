import "./../style/main.css";
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';



function Item(props) {
  return (
    <div className="card border-primary mb-3" style={{ width: "20rem" }}>
      <div class="card-header"><h3>{props.name}</h3></div>
      <img src={props.image} className="card-img-top" alt="articulo" style={{ width: "300px", height:"300px" }}/>
      <div className="card-body">
        <h4 className="card-title">{props.description}</h4>
        <h5 className="card-title">Precio: {props.price}</h5>
      </div>
      <ItemCount/>
      <Link to={`/item/${props.id}`}>Detalle</Link>
    </div>
  );
}

export default Item;




