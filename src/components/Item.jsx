import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import sillon from "./../media/sillon.png";

function Item({id, fila, numero, description, price}) {
  return (
    <div className="card" style={{ width: "5rem", fontSize: "1rem" }}>
      <img src={sillon} className="card-img-top" alt="butaca" style={{ width: "50px", height:"50px" }}/>
      <div className="card-body">
        <h4 className="card-title">{fila}{numero}</h4>
        <p className="card-text">{description}</p>
        <h5 className="card-title">{price}</h5>
        <ItemCount stock={1} initial={0} />
        <Link to={`/item/${id}`}>ir al detalle</Link>
      </div>
    </div>
  );
}

export default Item;