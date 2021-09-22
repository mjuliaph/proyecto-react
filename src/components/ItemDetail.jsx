import ItemCount from "./ItemCount";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

function ItemDetail ({props}){

    const {myCart, addItem} = useContext(CartContext);
    const [finalizarCompra, setFinalizarCompra] = useState(false);
    const [ newInitial, setNewInitial ] = useState(props.initial);


    // INTENTO HACER QUE:
    // SI EL PRODUCTO YA ESTÁ EN EL CARRITO, SE MUESTRE EL NÚMERO DE ESTE PRODUCTO QUE ESTÁ EN EL CARRITO COMO INITIAL
    // PERO ENTIENDO QUE SE LO PASA POR PROPS A itemCount Y LUEGO HACE EL useEffect (trabajando...)

    useEffect(() => {
        const checkCart = myCart.findIndex( (obj) => obj.id === props.id );
        if (checkCart >= 0) {
            const actualInitial = myCart[checkCart].quantity
            setNewInitial(actualInitial);
            console.log(`myCart al cargar con initial: ${actualInitial} es`, myCart);
        }
    }, [myCart, props.id, props.initial, props.stock]);


    const agregarAlCarrito = (cantidadItems) => {
        setFinalizarCompra(!finalizarCompra);
        addItem(props, cantidadItems)
    }
    console.log(myCart);


    return(
        <>
            <div className="boxDetail">
                <h1>{props.description}</h1>
                <p>{props.price}</p>
                    {
                        finalizarCompra ? (
                            <Link className="botonFinalizar" to="/cart">Compra Realizada - Volver</Link>
                        ) : (
                            <ItemCount initial={newInitial} stock={props.stock} onAdd={ (cant) => agregarAlCarrito(cant)} />
                        )
                    }
            </div>
        </>


    // return(
    //     <div>
    //         <div className="card cardRender"style={{width: "18rem"}}>
    //         <img src={props.img} className="card-img-top" alt=""/>
    //         <h2 className="card-title">{props.name}</h2>
    //         <p className="card-title">{props.description}</p>
    //         <h4 className="card-title"> ${props.price}</h4>
    //         {terminarCompra ? (
    //             <Link to = "/cart" className="boton">IR AL CARRITO</Link>
    //             ) : (
    //             <ItemCountHooks valorInicial= {props.initial} stock= {props.stock} onClick={(cantidad)=>agregarAlCarrito(cantidad)}/>
    //         )}
    //         </div>
    //     </div> 
    //     )};                     


//     <Container>
//     <Row>
//         <Col>
//              <h1 className="detailName">{ props.name }</h1>
//              <div className="detailImageContainer">
//                  <img className="detailImage" src={ props.img } alt={ props.name } />
//              </div>
//          </Col>
//          <Col>
//              <p className="description">Descripción: { props.description }</p>
//              <h2 className="price">Precio: $ { props.price }</h2>
//              { props.stock === 0 ? (
//                  <>
//                  <Button className="endButton" variant="primary" size="lg" disabled={true}>Sin stock</Button>
//                  <Link to="/"><p className="price">Seguir comprando!</p></Link>
//                  </>
//              ) : (
//                  finalizar ? (
//                      <Link to="/Cart"><Button className="endButton" variant="primary" size="lg">Finalizar compra</Button></Link>
//                  ) : (
//                      <ItemCount initial={newInitial} stock={props.stock} onAdd={ (cant) => agregar(cant)} />
//                  )
//              )}
//          </Col>
//      </Row>
//  </Container>
    );
}

export default ItemDetail;