import ItemCount from "./ItemCount";
import "./../style/index.css";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


 function ItemDetail(props) {

    const { cart, addItem } = useContext(CartContext); 
    const [ cantidadCompra, setCantidadCompra ] = useState();
    const [ terminarCompra, setTerminarCompra] = useState(false);
    const [ newInitial, setNewInitial ] = useState(props.initial);


    useEffect(() => {
        const checkCart = cart.findIndex ((obj) => obj.id === props.id );
        if (checkCart >= 0) {
            const actualInitial = cart[checkCart].quantity
            setNewInitial(actualInitial);
            
        }
    }, [cart, props.id, props.initial, props.stock]);


    const agregarAlCarrito = (cantProducto) => {
        setTerminarCompra(!terminarCompra)
        addItem (props, cantProducto)
    }
    
     return (
        <div>
            <h1 style={{marginTop:"2em", marginBottom:"1em", textAlign:"center", color:"var(--colorVioleta)", textShadow: "1px 1px 1px #000, 3px 3px 5px #fff"}}>Detalle del producto:</h1>
            <div className="detalleCard">
                <div className="card"style={{width: "18rem"}}>
                <img src={props.image} className="card-img-top" alt="articulo" style={{ width: "200px", height:"200px" }}/>
                <h2 className="card-title" style={{textAlign: "center"}}>{props.name}</h2>
                <p className="card-title">{props.description}</p>
                <h4 className="card-title">Precio: ${props.price}</h4>
                {terminarCompra ? (
                    <Link to = "/cart" className="btn btn-success" style={{margin:"0.5em", borderRadius:"5px"}}>IR AL CARRITO</Link>
                    ) : (
                    <ItemCount valorInicial= {props.initial} stock= {props.stock} onClick={(cantidad)=>agregarAlCarrito(cantidad)}/>
                )}
                </div>
            </div>              
        </div>
        )};                     



export default ItemDetail;