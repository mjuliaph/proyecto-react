import { createContext, useState, useEffect } from "react";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { getData } from "../firebase";

// creo el contexto y lo exporto, lo inicio como array vacio xq no hay nada en el carrito.
export const CartContext = createContext([]);


//creo mi estado global que se usara en APP
export const CartProvider = ( {children} ) => {

    const [ cart, setCart] = useState([]);
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
        console.log("Fin de compra");
        const orderCollection = doc(collection(getData(), 'orders'));
        const order = {
            buyer: user,
            items: cart,
            date: Timestamp.fromDate(new Date()),
            total: totalPrice
        };
        
        
        await setDoc(orderCollection, order)
        
    }

    //función para adherir un item al carrito
    const addItem = (item, cantidad) => {
        let newCart = cart

        const sumPrice = {...item}.price * cantidad;

        let newItem = { id: item.id, name: item.name, img: item.img, price: sumPrice, quantity: cantidad }

        if (isInCart({...item}.id)){
            // si el Producto está en el carrito primero anoto en qué posición está
            const idx = newCart.findIndex( (obj) => obj.id === {...item}.id );

            // lo elimino de newCart
            newCart = newCart.filter(( e ) => e.id !== {...item}.id);

            // lo agrego de nuevo en la misma posición que estaba para que al usuario no se le modifique la posición y lo vea extraño
            newCart.splice(idx, 0, newItem);

            // actualizo cart
            setCart(newCart)

        } else {
            // si el Producto no está en el carrito, actualizo cart directamente
            newCart = [...newCart, newItem];
            setCart(newCart)
        }
    }

    // funcion para ver si está en el carrito
    const isInCart = (id) => {
        const check = cart.filter((item) => item.id === id);
        return check.length > 0;
        };
    
    //funcion para eliminar un elemento
    const removeItem = (producto) => {
        const newCart = cart.filter((item) => item.id !== producto);
        setCart(newCart);
        };
        
    //funcion para vaciar el carrito
    const vaciarCarrito = () => {
            setCart([])
        };

    useEffect (() => {
        let inCart = 0
        
        for (let i of cart) {
            inCart += i.quantity 
        } 
        return setCartLength(inCart)
        } , [cart]);

    useEffect (() => {
        let cartPrice = 0;
    
        for (let i of cart) {
            cartPrice += i.price 
        } 
        return setTotalPrice(cartPrice)
        } , [cart]);


    return (
        <CartContext.Provider value={{cart, setCart, addItem, removeItem, vaciarCarrito, totalPrice, setTotalPrice, cartLength, setCartLength, finalizarCompra, tomarDatos, submitBotton}}>
            { children }
        </CartContext.Provider>
    )

}