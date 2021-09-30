import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import "../style/index.css";

// funcion para el icono del carrito de compras
function CartWidget() {

    const { itemsInCart } = useContext(CartContext); 

    console.log(itemsInCart)

    return (
    <Link to="/cart" className="" >
        <i className="fas fa-shopping-cart"></i>
        { {itemsInCart} === 0 ? (
                ""
            ) : (
                <span>{ itemsInCart }</span>
            )}
    </Link>
    )
};

export default CartWidget;
