import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";



function ItemDetail ({id, fila, numero, price, description}){

    const [compra, setCompra] = useState();
    const [finalizar, setFinalizar] = useState(false);


    const onAdd = (cantidad) => {
        setCompra(cantidad);
        setFinalizar(!finalizar);
    }
    console.log(`esto tiene el estado`, compra);


    return(
        <>
        <div className="boxDetail">
            <h1>{description}</h1>
            <h2>{fila}{numero}</h2>
            <p>{id}</p>
            <div>{price}</div>
                {
                    finalizar ? (
                        <Link className="botonFinalizar" to="/cart">Compra Realizada - Volver</Link>
                    ) : (
                        <ItemCount initial="1" stock="40" onClick={(cant) => onAdd(cant)} />                    
                    )
                }
        </div>
        </>
    );
}

export default ItemDetail;