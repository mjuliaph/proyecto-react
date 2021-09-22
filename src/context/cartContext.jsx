import { createContext, useState, useEffect } from "react";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { getData } from "../firebase";


// creo el contexto y lo exporto, lo inicio como array vacio xq no hay nada en el carrito.
export const CartContext = createContext([]);


// //creo mi estado global que se usara en APP
export const CartProvider = ({ children }) => {

    const [myCart, setMyCart] = useState([]);
    const [cartLength, setCartLength] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
  
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    });
    

    const tomarDatos = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const submitBotton = (e) => {
        e.preventDefault();
    }


    const finalizarCompra = async () => {
        console.log("Fin de la compra");
        const orderCollection = doc(collection(getData(), 'orders'));
        const order = {
            buyer: user,
            items: myCart,
            date: Timestamp.fromDate(new Date()),
            total: totalPrice
        };
        await setDoc(orderCollection, order)
    }

    //función para adherir un item al carrito
    const addItem = (item, cantidad) => {
        // inicializo newCart y lo utilizo en esta función para no mutar myCart
        let newCart = myCart

        // saco la cuenta del precio total que se quiere agregar 
        const sumPrice = {...item}.price * cantidad;

        // genero mi objeto newItem para agregarlo
        let newItem = { id: item.id, name: item.name, img: item.img, price: sumPrice, quantity: cantidad }

        if (isInCart({...item}.id)){
            // si el Producto está en el carrito primero anoto en qué posición está
            const idx = newCart.findIndex( (obj) => obj.id === {...item}.id );

            // lo elimino de newCart
            newCart = newCart.filter(( e ) => e.id !== {...item}.id);

            // lo agrego de nuevo en la misma posición que estaba para que al usuario no se le modifique la posición y lo vea extraño
            newCart.splice(idx, 0, newItem);

            // actualizo MyCart
            setMyCart(newCart)
        } else {
            // si el Producto no está en el carrito, actualizo MyCart directamente
            newCart = [...newCart, newItem];
            setMyCart(newCart)
        }
    }
    const isInCart = (id) => {
        const search = myCart.filter((item) => item.id === id);
        return search.length > 0;
    };

    const removeItem = (producto) =>{
        const myNewCart = myCart.filter(( e ) => e.id !== producto);
        setMyCart(myNewCart)
    }

    const vaciarCarrito = () => {
        setMyCart([])
    };

    useEffect (() => {
        let inCart = 0;
        console.log(myCart)
        for (let i of myCart) {
            inCart += i.quantity
        }
        return setCartLength(inCart)
        } , [myCart]);

    useEffect (() => {
        let cartPrice = 0;

        for (let i of myCart) {
            cartPrice += i.price
        }
        return setTotalPrice(cartPrice)
    }, [myCart]);
    

    return (
        <CartContext.Provider value={{ myCart, setMyCart, addItem, isInCart, cartLength, setCartLength, removeItem, vaciarCarrito, totalPrice, setTotalPrice, finalizarCompra, tomarDatos, submitBotton }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;