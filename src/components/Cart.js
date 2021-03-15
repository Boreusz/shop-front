import React from "react";
import { Link } from "react-router-dom";
import "../styles/cart.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <div className="cart_container">
      <div className="cart_wrapper">
        <div className="cart-list">
          <div className="cart-list-header">
            <h2>Shipping Bag</h2>
          </div>
          {props.items.map((item) => {
            return (
              <CartItem
                item={item}
                addItemToCart={props.addItemToCart}
                deleteItem={props.deleteItem}
              />
            );
          })}
        </div>
        <div className="cart-summary">
          <Link className="home-bttn" to="/cart">
            Checkout
          </Link>
          <div>
            <h2>Total: </h2>
            <h3>{props.totalPrice !== 0 ? props.totalPrice + "$" : null}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
