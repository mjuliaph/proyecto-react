import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../style/index.css";

function CartWidget () {

    const { cartLength } = useContext(CartContext); 
    
    return (
    <Link to="/cart">
        <i className="fas fa-shopping-cart"></i>
        { {cartLength} === 0 ? (
                ""
            ) : (
                <span className="badge rounded-pill bg-info" style={{color:"white", fontSize:".75rem", marginLeft:"-3em"}}>{ cartLength }</span>
            )}
    </Link>
    )
};

export default CartWidget;
