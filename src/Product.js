import React from "react";
import './Product.css';
import { useStateValue } from "./StateProvider";

const Product = (props) => {
  const [dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
        rating: props.rating,
      },
    });
  };
  return (
    <div className="product">
      <p className="product__title">{props.title}</p>
      <p className="product__price">
        <small>$</small>
        <strong>{props.price}</strong>
      </p>
      <div className="product__rating">
        {Array(props.rating)
          .fill()
          .map((_, i) => (
            <div key={i}>
              <p>⭐</p>
            </div>
          ))}
      </div>
      <img className="product__image" src={props.image} alt="" />
      <button onClick={()=>addToBasket()}>Add to Basket</button>
    </div>
  );
};

export default Product;
