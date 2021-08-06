import React, { useState } from 'react';
    
function ItemCount(props) {
    const [count, setCount] = useState(parseInt(props.initial));
    const [stockProd, setStockProd] = useState(props.stock);



    function sumar() {
        if (count < Stockprod) {
            setCount(count + 1)
        }
    }
    function restar() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <h3>Cuantas entradas deseas?</h3>
            <button onClick={() => sumar()}>Restar</button>
            <button onClick={() => restar()}>Restar</button>
        </div>
    )
}

export default ItemCount;
