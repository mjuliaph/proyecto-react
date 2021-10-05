import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./../style/index.css";

function Cart () {
    const { cart, removeItem, cartLength, vaciarCarrito, totalPrice } = useContext(CartContext);

    return (
        cartLength <= 0 ? 
        (<div className= "container cartPrincipal">
            <h1>Bienvenido a tu carrito!</h1>
            <div>
                <h2 style={{margin:"4em"}}>Oh, no.. Tu carrito esta vacío!</h2>
                <Link to="/">
                    <button className="btn btn-warning btnVacio" >¡Volvé y empezá a comprar!</button>
                </Link>
            </div>
        </div>
        ):(
        <div className= "container cartPrincipal">
            <div>
                <h1>Bienvenido a tu carrito!</h1>
                <h2 style={{textAlign:"start"}}>Este es el detalle:</h2>
            </div>
            <div className= "container-fluid">
                <div className = "row">
                    <h3 className= "col-md-4">Producto</h3>
                    <h3 className= "col-md-3">Cantidad</h3>
                    <h3 className="col-md-3">Precio</h3>
                    <h3 className="col-md-2">Operación</h3>
                </div>
            </div>

            { cart.map((item) => {
                    return (
                    <div className= "container-fluid">
                        <div className= "row estiloTituloDos" key={item.id}>
                            <div className= "col-md-4 itemList">{item.name}</div>
                            <div className= "col-md-3 itemList">{item.quantity}</div>     
                            <div className= "col-md-3 itemList">$ {item.price}</div>
                            <div className= "col-md-2 itemList">
                                <Link to={`/item/${ item.id }`}><button style={{marginRight:"0.75em", borderRadius:"90%", backgroundColor:"white"}}><i className="fas fa-pen-nib" style={{color:"green"}}></i></button></Link>
                                <button style={{borderRadius:"90%", backgroundColor:"white"}} onClick={()=>removeItem(item.id)}><i className="far fa-trash-alt" style={{color:"red"}}></i></button>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            <div>
                <h3 className="tituloCompra" style={{textAlign:"start", margin:"2em 0", fontSize:"1.5rem"}}>Total de tu compra: ${totalPrice}</h3>
                <div className="acomodarBoton">
                    <button onClick={ ()=> vaciarCarrito() } className="btn btn-outline-danger">Vaciar Carrito</button>
                    <Link to="/" ><button  className="btn btn-outline-warning" >Seguir Comprando</button></Link>
                    <Link to= "/cartForm"><button className="btn btn-outline-success">Finalizar Compra</button></Link>
                </div>
            </div>
        </div>
    ))
}
export default Cart;

