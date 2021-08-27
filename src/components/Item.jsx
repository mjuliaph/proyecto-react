import { Link } from 'react-router-dom';
import sillon from "./../media/sillon.png";

function Item({id, fila, numero, price}) {
  return (
    <div className="card" style={{ width: "5rem" }}>
      <img src={sillon} className="card-img-top" alt="butaca" style={{ width: "50px", height:"50px" }}/>
      <div className="card-body">
        <h4 className="card-title">{fila}{numero}</h4>
        <h5 className="card-title">{price}</h5>
        <Link to={`/item/${id}`}>Detalle</Link>
      </div>
    </div>
  );
}

export default Item;