import React from "react";
import "../styles/cart.css";

const Cart = (props) => {

  return (
    <div className="cart_container">
      <div className="cart_wrapper">
        <div className="cart-list">
          {props.items.map(item => {
            return(
              <div className="cart-list-item">
                <button className="cart-list-info" type="button" onClick={() => props.deleteItem()}>D</button>
                <div className="cart-list-item-image">
                  <img src={item.image} alt={item.name}/>
                </div>
                <input type="number" onChange></input>
                <span className="cart-list-info">{item.price * item.stock}$</span>
              </div>
            )
          })}
        </div>
        <div className="cart-summary"></div>
      </div>
    </div>
  );
};

export default Cart;
