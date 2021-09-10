import ItemDetail from './ItemDetail';
import { products } from "./ProductsJson";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  const {category} = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      if (category !== undefined) {
        setTimeout(() => resolve(products.filter((item) => item.category === category)), 3000);
      } else {
          setTimeout(() => resolve(products), 2000);        
      }
    })
      .then((data) => {
        console.log("data", data);
        setProduct(data[0]);
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, [category]);

  // console.log("product", product);

  return (
    <>
      <ItemDetail {...product} />
      <Link className="botonVolver" to="/">Volver atrás</Link>
    </>
  )
}

export default ItemDetailContainer;