import { useState, useEffect } from "react";
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
      <div className="botonesCompra">
        <button onClick={() => sumar()}>Agregar</button>
        <button onClick={() => restar()}>Sacar</button>
      </div>
      <h6>Cantidad seleccionada: {count}</h6>
      {count > 0 && <button onClick={() => onAdd(count)}>Agregar al Carrito</button>}
    </div>
  );
}

export default ItemCount;