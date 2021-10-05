import ItemList from "./ItemList";
// import {products} from "./ProductsJson";
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getData } from '../firebase';



 function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const { category }  = useParams()

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


  return loading ? (

    <div className=""><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
) : (
      <div>
        <h2 style={{marginTop:"4em", marginBottom:"2em", textAlign:"center", color:"var(--colorVioleta)", textShadow: "1px 1px 1px #000, 3px 3px 5px #fff"}}>Mirá todos nuestros productos!</h2>
        <ItemList products={products}/>
      </div>
  );
}

export default ItemListContainer;