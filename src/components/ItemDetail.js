/*Debe mostrar la vista de detalle de un item incluyendo su descripcion, una foto y el precio */ 
// import { useParams } from 'react-router-dom';


function ItemDetail ({id, fila, numero, price, description}){

    return(
        <>
        <div>
            <h1>{description}</h1>
            <h2>{fila}{numero}</h2>
            <p>{id}</p>
            <div>{price}</div>
        </div>
        </>
    );
}

export default ItemDetail;