import React, { useState } from "react"; //, useEffect
import "./../style/index.css";

function ItemCount(props) {
  const [count, setCount] = useState(parseInt(props.valorInicial));
  const [stockItems, setstockItems] = useState(parseInt(props.stock));
  // const onAdd = () =>{}

  function sumarItems() {
    if (count < stockItems) {
      setCount(count + 1);
      setstockItems(stockItems - 1);
    }
    console.log(sumarItems);
  }
  function restarItems() {
    if (count > 0) {
      setCount(count - 1);
      setstockItems(stockItems + 1);
    }
    console.log(restarItems);
  }

//   useEffect(()=>{
//     onAdd(count);
// }, [count]);

  return (
    <div className="botoneraCompra">
      <div className="botonesCompra">
        <button onClick={() => sumarItems()}>Agregar</button>
        <button onClick={() => restarItems()}>Sacar</button>
      </div>
      {/* <button className="boton" onClick={()=>props.onAdd(count)} >AGREGAR</button> */}

      <button className="boton" onAdd={()=>props.onAdd(count)} >AGREGAR</button>
    </div>
  );
}

export default ItemCount;