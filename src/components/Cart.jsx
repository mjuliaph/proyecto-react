import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom"

function Cart() {

    const { myCart, removeItem, cartLength, vaciarCarrito, totalPrice, finalizarCompra } = useContext(CartContext);
    
    console.log(myCart);

    return (
        cartLength <= 0 ? 
        (<div>
           <h1 className= "formato">DETALLE DE TU COMPRA</h1>
            
           <div>
                <h2 className= "formato">Tu carrito esta vacío... 

 ¡Comenza a disfrutar de la moda a tu manera, clickea aquí abajo!<i className="far fa-smile-beam"></i></h2>
                
                    <Link to="/">
                        <button className="boton" style={{marginTop:"4rem", fontSize:"1.5rem", backgroundColor:"#c5a2b3"}}>¡Empezá a comprar!</button>
                    </Link>
            </div>
        </div>
        ):(
        <div>
            <div>
                <h1 className= "formato">DETALLE DE TU COMPRA</h1>
            </div>
            <div className= "container-fluid">
                <div className = "row estiloTitulo">
                    <h4 className= "col-md-6 estiloItems">Productos</h4>
                    <h4 className= "col-md-2 estiloItems">Cantidad</h4>
                    <h4 className= "col-md-2 estiloItems">Precio</h4>
                    <h4 className= "col-md-1 estiloItems">Acciones</h4>
                </div>
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
                    <Link to= "/cartForm"><button className="emptyButton iconos" style= {{color:"white", width:"10rem", fontSize:"1.2rem", textAlign:"center"}}>Finalizar Compra  <i style={{color: "rgb(14, 197, 37)", padding:"5px"}} className="fas fa-check-square"></i></button></Link>
                        </div>
                        <h3>Total: $ {totalPrice}</h3>
                <button variant="primary" size="sm" alt="Vaciar carrito" onClick={()=>finalizarCompra()} className="emptyButton"><i className="far fa-check"></i> Finalizar Compra</button>
                <button variant="danger" size="sm" alt="Vaciar carrito" onClick={()=>vaciarCarrito()} className="emptyButton"><i className="far fa-trash"></i> Vaciar</button>

            </div>
        </div>
     
    ))
}

export default Cart;