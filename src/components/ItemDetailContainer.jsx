import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { butacas } from "./ProductsJSON";


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(butacas.filter((item) => item.id === id)),
        3000
      );
    }).then((data) => setProduct(data[0]));
  }, []);

  console.log("product", product);

  return <ItemDetail {...product} />;
}

export default ItemDetailContainer;