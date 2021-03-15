import React from "react";
import { IoMdTrash } from "react-icons/io";
import "../styles/cartItem.css";

const CartItem = (props) => {
  const deleteItem = (id, qty = 0) => {
    if (qty === 0) {
      props.deleteItem(id);
    } else {
      props.deleteItem(id, qty);
    }
  };
  const addItem = (id) => {
    props.addItemToCart(id, 1);
  };
  return (
    <div className="cart-list-item">
      <button
        className="cart-list-item-delete"
        type="button"
        onClick={() => deleteItem(props.item.id)}
      >
        <IoMdTrash />
      </button>
      <div className="cart-list-item-image">
        <img src={props.item.image} alt={props.item.name} />
      </div>
      <div className="cart-list-item-name">{props.item.name}</div>
      <div className="cart-list-item-quantity">
        <button onClick={() => addItem(props.item.id)}>+</button>
        <input type="number" value={props.item.stock} readOnly></input>
        <button onClick={() => deleteItem(props.item.id, 1)}>-</button>
      </div>
      <span className="cart-list-info">
        {(props.item.price * props.item.stock).toFixed(2)}$
      </span>
    </div>
  );
};

export default CartItem;
