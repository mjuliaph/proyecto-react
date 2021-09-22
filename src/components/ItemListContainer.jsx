import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';
// import { products } from "./ProductsJson";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getData } from '../firebase';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const { category } = useParams();

    
    
    useEffect(() => {
        setLoading(true);
  
        // función que busca todos los productos
        const getProds = async () => {
          const prodCollection = collection(getData(), 'products');
          const prodSnapshot = await getDocs(prodCollection);
          const prodList = prodSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setLoading(false);
          setProducts(prodList);
        };

        // función que busca productos filtrados
        const getCategory = async () => {
            const prodCollection = collection(getData(), 'products');
            const categoryQuery = query(prodCollection, where('category', '==', `${category}`));
            try {
              const prodSnapshot = await getDocs(categoryQuery);
              const categoryList = prodSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
              }));
              setLoading(false);
              setProducts(categoryList);
            } catch (err) {
              console.log(err);
            }
          };
      
          // elijo qué función utilizar
          if (category !== undefined){
            getCategory();
          } else {
            getProds();
          }
      
        }, [category]);    


    // useEffect(()=> {
    //     new Promise ((resolve, reject) => {
    //         setTimeout(() => {
    //         resolve(products)
    //         },2000);
    //     })
    //     .then(dataResolve => {
    //         console.log("data Resolve" + dataResolve);
    //         setProduct(dataResolve);
    //         console.log("dataResolve " + dataResolve)
    //     })
    //     .catch(error => {
    //         console.log("err" + error);
    //     })
    // },[])



    return loading ? (

        <div className=""><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    ) : (
            <div className="">
                <ItemList products={products}/>
            </div>
      );
}
    

//     return (
//         <>
//             <div className="itemListContainer">
//                 <ItemList products={product} />
//             </div>
//         </>
//     )
// }


export default ItemListContainer;