import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemDetail from './ItemDetail';
// import { products } from "./ProductsJson";
import { collection, getDocs } from 'firebase/firestore';
import { getData } from '../firebase';


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    // función que busca todos los productos
    const getProduct = async () => {
    const prodCollection = collection(getData(), 'productos');
    const prodSnapshot = await getDocs(prodCollection);
    const prodList = prodSnapshot.docs.map(doc => ({
        id: doc.id, ...doc.data()
    }));
    // filtro el listado y busco el que quiero mostrar
    const thisProd = prodList.filter((item)=>item.id === id)
    setLoading(false);
    setProduct(thisProd);
    };
    getProduct();
}, [id]);

  // useEffect(() => {
  //   new Promise((resolve, reject) => {
  //     if (category !== undefined) {
  //       setTimeout(() => resolve(products.filter((item) => item.category === category)), 3000);
  //     } else {
  //         setTimeout(() => resolve(products), 2000);        
  //     }
  //   })
  //     .then((data) => {
  //       console.log("data", data);
  //       setProduct(data[0]);
  //     })
  //     .catch((error) => {
  //       console.log("err", error);
  //     });
  // }, [category]);

  // console.log("product", product);

  if (loading) {
    return <div className=""><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
}

return (
    <div className="">
    { product.map((item) => {
        return(
            <>
            <ItemDetail id={item.id} name={item.name} img={item.img} price={item.price} description={item.description} stock={item.stock} initial={item.initial} key={item.id}/>
            <Link className="botonVolver" to= "/"> VOLVER A PRODUCTOS </Link>
            </>
        )
        })
    }
    </div>
)}

export default ItemDetailContainer;








