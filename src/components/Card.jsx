import "./../style/main.css";
import ItemCount from "./ItemCount"

function Card (props) {
    
    return (
        <div className="card border-primary mb-3" style={{ width: "20rem" }}>
            <div class="card-header"><h3>{props.name}</h3></div>
            <img src={props.img} className="card-img-top" alt="articulo" style={{ width: "200px", height:"200px" }}/>
            <div className="card-body">
                <h4 className="card-title">{props.description}</h4>
                <h5 className="card-title">Precio: {props.price}</h5>
            </div>
            <ItemCount/>
        </div>
    )

}

export default Card;