import {Link} from 'react-router-dom';
import "./../style/index.css";



function Item(props) {
    
  return (
    <div className="card border-primary mb-2" data-aos="zoom-in" data-aos-duration="3000" style={{ width: "20rem" }}>
      <div className="card-header"><h3>{props.name}</h3></div>
      <img src={props.image} className="card-img-top" alt="articulo" style={{ width: "300px", height:"300px", marginTop:"0.5em"}}/>
      {/* <div className="card-body">
        <h4 className="card-title">{props.description}</h4>
        <h5 className="card-title">Precio: {props.price}</h5>
      </div> */}
      <div className="botonDetalle">
        <Link to={`/item/${props.id}`}>Ver en detalle</Link>        
      </div>
    </div>
  );    
}

export default Item;