import {useEffect, useState} from 'react';
import ItemList from './ItemList';
import { butacas } from "./ProductsJSON";


function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        new Promise ((resolve, reject) => {
            setTimeout(() => {
            resolve(butacas)
            },2000);
        })
        .then(dataResolve => {
            console.log("data Resolve" + dataResolve);
            setProducts(dataResolve);
            console.log("dataResolve " + dataResolve)
        })
        .catch(error => {
            console.log("err" + error);
        })
    },[])

    return (
        <>
        <div className="itemListContainer">
            {products.map((data) => {
            return( 
            <ItemList 
            description={data.description} 
            price={data.price} />)}) }
        </div>

        </>
    )
}


export default ItemListContainer;