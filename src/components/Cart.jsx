import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

function Cart() {

    const { myCart, removeItem, itemsInCart, vaciarCarrito, totalPrice } = useContext(CartContext);
    
    console.log(myCart);

    return (
        itemsInCart <= 0 ? 
        (<div>
           <h1 className= "">Bienvenido a tu carrito!</h1>
           <div>
                <h2 className= "">Oh, no.. Tu carrito esta vacío!</h2>
                <Link to="/">
                    <button className="" style={{marginTop:"4rem", fontSize:"1.5rem", backgroundColor:"#c5a2b3"}}>¡Volvamos para atrás!</button>
                </Link>
            </div>
        </div>
        ):(
        <div>
            <div>
                <h1 className= "">Bienvenido a tu carrito!</h1>
            </div>

            {myCart.map((item) => {
                    return (
                    <div className= "container-fluid">
                        <div className= "row estiloTituloDos" key={item.id}>
                            <div className= "col-md-2 estiloItemsDos"><img style= {{ maxWidth: "100%", maxHeight: "50px"}} src={item.img} alt={item.name}/></div>
                            <div className= "col-md-4 estiloItemsDos">{item.name}</div>
                            <div className= "col-md-2 estiloItemsDos">{item.quantity}</div>     
                            <div className= "col-md-2 estiloItemsDos">$ {item.price}</div>
                            <div className= "col-md-1 estiloItemsDos">
                                <Link to={`/item/${ item.id }`}><button className="iconos"><i style={{color: "rgb(14 197 37)"}} className="fas fa-pencil"></i></button></Link>
                                <button className="iconos" onClick={()=>removeItem(item.id)}><i style={{color: "rgb(224, 24, 24, 1)"}} className="fas fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            <div>
                <h3 style={{backgroundColor: "#ffffff8f", textAlign:"center", fontSize:"2rem", fontWeight:"700"}}>Total de su compra: ${totalPrice}</h3>
                <div className="acomodarBoton">
                    <button onClick={ ()=> vaciarCarrito() } className="emptyButton iconos" style= {{color:"white", width:"10rem", fontSize:"1.2rem", textAlign:"center"}}>Vaciar  <i style={{color: "rgb(224, 24, 24, 1)", padding:"5px"}} className="fas fa-trash"> </i></button>
                    <Link to="/" ><button  className="emptyButton iconos" style= {{color:"white", width:"10rem", fontSize:"1.2rem", textAlign:"center"}}>Seguir Comprando  <i style={{color: "rgb(34, 41, 253, 1)", padding:"5px"}} className="fas fa-hand-point-left"> </i></button></Link>
                    <Link to= "/CartForm"><button className="emptyButton iconos" style= {{color:"white", width:"10rem", fontSize:"1.2rem", textAlign:"center"}}>Finalizar Compra  <i style={{color: "rgb(14, 197, 37)", padding:"5px"}} className="fas fa-check-square"></i></button></Link>
                </div>
            </div>
        </div>
    ))
}

export default Cart;