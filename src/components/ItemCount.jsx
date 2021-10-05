import React, { useState } from "react";
import "./../style/index.css";

function ItemCount (props) {
    
    const [count, setCount] = useState(parseInt(props.valorInicial));
    const [stock, setStock] = useState(parseInt(props.stock));
    

    function sumarItems () {
        if (count < stock) {
            setCount(count + 1)
        }
    }                  

    function restarItems () {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
        <h5>CANTIDAD: {count}</h5>
        <div className="botonesStock">
            <button onClick = {()=> restarItems()}> Restar </button>
            <button onClick = {()=>sumarItems()}> Sumar </button>
        </div>
        <button className="btn btn-outline-success agregar" onClick={()=>props.onClick(count)} >AGREGAR</button>
        </>
    )
};

export default ItemCount;