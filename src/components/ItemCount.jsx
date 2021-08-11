import React, { useState } from "react";
import "./../css/index.css";

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(parseInt(initial));
  // const [stock, setStock] = useState(props.stock);

  function sumar() {
    if (count < 5) {
      setCount(count + 1);
    }
  }
  function restar() {
    if (count > 0) {
      setCount(count - 1);
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
