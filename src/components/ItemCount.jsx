import React, { useState } from "react";
import "./../css/index.css";

function ItemCount(props) {
  const [count, setCount] = useState(parseInt(props.initial));
  const [stock, setStock] = useState(props.stock);

  function sumar() {
    if (count < 5) {
      setCount(count + 1);
      setStock(stock - 1);
      console.log(stock, count);
    }
  }
  function restar() {
    if (count > 0) {
      setCount(count - 1);
      setStock(stock + 1);
      console.log(stock, count);
    }
  }

  return (
    <div className="botoneraCompra">
      <h4>Cuantas entradas deseas? </h4>
      <div className="botonesCompra">
        <button onClick={() => sumar()}>Agregar</button>
        <button onClick={() => restar()}>Restar</button>
      </div>
      <p>Vas a comprar {count} entradas</p>
    </div>
  );
}

export default ItemCount;
