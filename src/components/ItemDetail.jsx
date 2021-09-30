import ItemCount from "./ItemCount";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

function ItemDetail (props){

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
            console.log(`myCart al cargar con initial es: ${actualInitial}`, myCart);
        }
    }, [myCart, props.id, props.initial, props.stock]);


    const addCart = (cantidadItems) => {
        setFinalizarCompra(!finalizarCompra);
        addItem(props, cantidadItems)
    }
    console.log(myCart);


    return(
        <>
            <div className="">
                <h1>{props.description}</h1>
                <p>{props.price}</p>
                    {
                        finalizarCompra ? (
                            <Link className="botonFinalizar" to="/cart">Ir al Carrito</Link>
                        ) : (
                            <ItemCount valorInicial={props.initial} stock={props.stock} onAdd={ (cant) => addCart(cant)}/>
                            // <ItemCount valorInicial= {props.initial} stock= {props.stock} onClick={(cantidad)=>agregarAlCarrito(cantidad)}/>
                        )
                    }
            </div>
        </>
    );
}

export default ItemDetail;

