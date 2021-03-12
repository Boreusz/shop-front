import React from "react";
import "../styles/cart.css";
import CartItem from "./CartItem";

const Cart = (props) => {

  return (
    <div className="cart_container">
      <div className="cart_wrapper">
        <div className="cart-list">
          {props.items.map(item => {
            return(
             <CartItem item={item}/>
            )
          })}
        </div>
        <div className="cart-summary"></div>
      </div>
    </div>
  );
};

export default Cart;
