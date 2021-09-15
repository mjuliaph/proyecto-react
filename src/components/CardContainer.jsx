import { useEffect, useState } from "react";
import { products } from "./ProductsJson";
import Card from "./Card";

function CardContainer () {

    const [dataCard, setDataCard] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setDataCard(products)
            setLoading(false)
        }, 2000)
    }, [dataCard])


    if (loading) {
        return (
            <h3>Loading...</h3>
        )
    }
    return (
        <div className="cardContainer">
            {products.map((datos) => (
                <Card {...datos}/>
            ))}
        </div>
    )
}

export default CardContainer;