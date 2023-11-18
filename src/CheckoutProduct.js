import React from "react";
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
    
    const [{}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: props.id
        })
    }
    return(
        <div className="checkoutProduct">
            <img className="checkoutProduct__image"
                src = {props.image} 
                alt=""
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{props.title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="checkoutProduct__rating">{
                    Array(props.rating)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}   
                </div>
                <button onClick={()=>removeFromBasket()} >Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;