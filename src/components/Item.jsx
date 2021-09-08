import { Link } from 'react-router-dom';


function Item({id, name, img, price}) {
  return (
    <div className="card" style={{ width: "5rem" }}>
      <img src={img} className="card-img-top" alt="articulo" style={{ width: "50px", height:"50px" }}/>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h5 className="card-title">{price}</h5>
        <Link to={`/item/${id}`}>Detalle</Link>
      </div>
    </div>
  );
}

export default Item;