
function Card (props) {
    
    return (
        <div className="card" style={{ width: "20rem" }}>
            <h3>{props.name}</h3>
            <img src={props.img} className="card-img-top" alt="articulo" style={{ width: "50px", height:"50px" }}/>
            <div className="card-body">
                <h4 className="card-title">{props.description}</h4>
                <h5 className="card-title">{props.price}</h5>
            </div>
        </div>
    )

}

export default Card;