import React from "react";
import "../styles/cartItem.css";

const CartItem = (props) => {
  return (
    <div className="cart-list-item">
      <button
        className="cart-list-info" type="button" onClick={() => props.deleteItem()}>D</button>
      <div className="cart-list-item-image">
        <img src={props.item.image} alt={props.item.name} />
      </div>
      <input type="number" onChange></input>
      <span className="cart-list-info">{props.item.price * props.item.stock}</span>
    </div>
  );
};
