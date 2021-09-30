import { CartContext } from "../context/cartContext"
import { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart"
import cssItem from "../css/item.css"

function CartForm() {

 const { tomarDatos, finalizarCompra, vaciarCarrito, submitBotton } = useContext(CartContext) 

    return (
        <div>
        <form onSubmit={submitBotton} style={{width:"100%", size: "200px"}}>
            <h2 style={{backgroundColor: "#ffffff8f", textAlign:"center", fontSize:"2rem", fontWeight:"700", marginBottom:"30px"}}>Datos para finalizar la compra</h2>
            <div style= {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"}}>
                <label>
                    <input style={{width:"400px", height:"30px", fontSize:"1.1rem"}} name="email" type="email" onChange={tomarDatos} placeholder="Correo electrónico" />
                </label>
                <br></br>
                <br></br>
                <label>
                    <input style={{width:"400px", height:"30px", fontSize:"1.1rem"}} name="phone" type="phone" onChange={tomarDatos} placeholder="Teléfono" />
                </label>
                <br></br>
                <br></br>
                <label>
                    <input style={{width:"400px", height:"30px", fontSize:"1.1rem"}} name="name" type="name" onChange={tomarDatos} placeholder="Nombre y Apellido" />
                </label>
                <br></br>
                <br></br>
            </div>
            
            <div className="acomodarBoton">   
        
                <button className="iconos" onClick={()=>finalizarCompra()} style= {{color:"white", width:"10rem", fontSize:"1.2rem", textAlign:"center"}} type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Confirmar compra <i style={{color: "rgb(14, 197, 37)", padding:"5px"}} className="fas fa-check-square"></i></button>
                <div className="modal fade fuente" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">DETALLE DE TU COMPRA</h5>
                            <button type="button"  data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" style={{fontSize:"1.1rem"}}> ¡Compra realizada con éxito! <i style={{color: "rgb(14, 197, 37)"}} class="fas fa-check-circle"></i></div>
                        <div class="modal-footer">
                            <Link to="/"><button onClick={vaciarCarrito} type="button" style={{backgroundColor: "black", color:"white", fontSize:"1.5rem", borderRadius:"10px"}} data-bs-dismiss="modal">Cerrar</button></Link>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                <Link to="/"><button className="iconos" style= {{color:"white", width:"10rem", fontSize:"1.2rem", textAlign:"center"}} type="submit">Seguir comprando <i style={{color: "rgb(34, 41, 253, 1)", padding:"5px"}} className="fas fa-hand-point-left"> </i></button></Link>
            
                <Link to="/"><button className="iconos" style= {{color:"white", width:"10rem", fontSize:"1.2rem", textAlign:"center"}} onClick={vaciarCarrito}type="submit">Cancelar compra <i style={{color: "rgb(224, 24, 24, 1)", padding:"5px"}} className="fas fa-trash"> </i></button></Link>
            </div>
        </form>
    </div>
    )

};

export default CartForm;