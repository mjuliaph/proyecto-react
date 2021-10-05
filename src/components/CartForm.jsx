import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./../style/form.css";


function CartForm() {

    const { getData, finalizarCompra, vaciarCarrito, submitButton } = useContext(CartContext) 

    return (
        <div className="container formulario margenesForm">
            <form onSubmit={submitButton} style={{ width: "100%", size: "200px" }}>
            <h2 style={{color:"#a0144f", textAlign:"center", fontSize:"1.5rem", marginBottom:"30px", marginTop:"30px"}}>Un paso más antes de terminar!</h2>
                <fieldset className="contenidoForm">
                    <legend>Datos Personales</legend>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className="form-label mt-4">Nombre y Apellido</label>
                                        <input type="name" className="form-control" aria-describedby="nombreCompleto" name="name" onChange={getData} placeholder="Juana De Arco"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className="form-label mt-4">Número de teléfono</label>
                        <input type="phone" className="form-control" aria-describedby="telefono" name="phone" onChange={getData} placeholder="11-11111111"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className="form-label mt-4">Correo Electrónico</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" name="email" onChange={getData} placeholder="correo@mail.com"/>
                        <small id="emailHelp" className="form-text text-muted">Nunca compartiremos estos datos con nadie!</small>
                    </div>
                                    
                    <fieldset className="form-group">
                        <legend className="mt-4">¿Deseas recibir nuestro newsletter?</legend>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1"/>Si, claro!
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"/>No, te agradezco
                            </label>
                        </div>
                    </fieldset>
                </fieldset>

                <div className="margenesForm">
                    <Link to="/"><button className="btn btn-warning" style={{ width: "10rem", height: "4rem", fontSize: "1rem", textAlign: "center", borderRadius: "5px"}} type="submit">Seguir comprando</button></Link>

                    <Link to="/"><button className="btn btn-danger" style= {{width:"10rem", height:"4rem", fontSize:"1rem", textAlign:"center", borderRadius:"5px"}} onClick={vaciarCarrito}type="submit">Cancelar compra</button></Link>

                    <button className="btn btn-success" onClick={()=>finalizarCompra()} style= {{width:"10rem", height:"4rem", fontSize:"1rem", textAlign:"center", borderRadius:"5px"}} type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Confirma tu compra</button>
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">DETALLE DE TU COMPRA</h5>
                                </div>
                                <div className="modal-body" style={{fontSize:"1rem"}}>¡Compra realizada con éxito! <i style={{color: "rgb(14, 197, 37)"}} class="fas fa-check-circle"></i></div>
                                <div className="modal-footer">
                                    <Link to="/"><button className="btn btn-outline-dark" onClick={vaciarCarrito} type="button" style={{fontSize:"1rem", borderRadius:"10px"}} data-bs-dismiss="modal">Cerrar</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default CartForm;