import {useEffect, useState} from 'react';
import ItemList from './ItemList';
import { products } from "./ProductsJson";


function ItemListContainer() {
    const [product, setProduct] = useState([]);

    useEffect(()=> {
        new Promise ((resolve, reject) => {
            setTimeout(() => {
            resolve(products)
            },2000);
        })
        .then(dataResolve => {
            console.log("data Resolve" + dataResolve);
            setProduct(dataResolve);
            console.log("dataResolve " + dataResolve)
        })
        .catch(error => {
            console.log("err" + error);
        })
    },[])

    return (
        <>
            <div className="itemListContainer">
                <ItemList products={product} />
            </div>
        </>
    )
}


export default ItemListContainer;