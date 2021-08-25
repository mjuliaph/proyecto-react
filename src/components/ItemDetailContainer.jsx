import ItemDetail from './ItemDetail';
import { butacas } from "./ProductsJson";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      
      setTimeout(() => resolve(butacas.filter((item) => item.id === id)), 3000);
    })
      .then((data) => {
        console.log("data", data);
        setProduct(data[0]);
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, []);

  // console.log("product", product);

  return <ItemDetail {...product} />;
}

export default ItemDetailContainer;