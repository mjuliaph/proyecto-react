import React, { useState, useEffect } from "react";
import "./../style/index.css";

function ItemCount(props) {
  const [count, setCount] = useState(parseInt(props.initial));
  const [stockProd, setStockProd] = useState(parseInt(props.stock));
  const onAdd = () =>{}

  function sumar() {
    if (count < stockProd) {
      setCount(count + 1);
      setStockProd(stockProd - 1);
    }
  }
  function restar() {
    if (count > 0) {
      setCount(count - 1);
      setStockProd(stockProd + 1);
    }
  }

  useEffect(()=>{
    onAdd(count);
}, [count]);

  return (
    <div className="botoneraCompra">
      {/* <h4>Cuantas entradas deseas? </h4> */}
      <div className="botonesCompra">
        <button onClick={() => sumar()}>Agregar</button>
        <button onClick={() => restar()}>Sacar</button>
        {/* <button onClick={() => props.onClick(count)}>AGREGAR</button> */}
      </div>
    </div>
  );
}

export default ItemCount;
