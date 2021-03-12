import React from "react";
import { IoMdTrash } from "react-icons/io"
import "../styles/cartItem.css";

const CartItem = (props) => {
  return (
    <div className="cart-list-item">
      <button
        className="cart-list-info" type="button" onClick={() => props.deleteItem()}><IoMdTrash/></button>
      <div className="cart-list-item-image">
        <img src={props.item.image} alt={props.item.name} />
      </div>
      <div className="cart-list-item-name">
        {props.item.name}
      </div>
      <input type="number" onChange></input>
      <span className="cart-list-info">{props.item.price * props.item.stock}$</span>
    </div>
  );
};

export default CartItem