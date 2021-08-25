import {useEffect, useState} from 'react';
import ItemList from './ItemList';
import { butacas } from "./ProductsJson";


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
                <ItemList butacas={products} />
            </div>
        </>
    )
}


export default ItemListContainer;