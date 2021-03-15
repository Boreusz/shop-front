import React, { useState } from "react";
import "../styles/item.css";

const outOfStock = <span className="out-of-stock"> Sorry, already gone!</span>;
const Item = (props) => {
  const [qty, setQty] = useState(1);
  return (
    <div className="item_container">
      <div className="item_wrapper">
        <main className="item_main">
          <div className="item-background">
            <header className="header">
              <div className="item-name">{props.item.name}</div>
            </header>
            <div className="item-info-container">
              <img
                className="item-image"
                src={props.item.image}
                alt={props.item.name}
              />
              <div className="item-text">
                <div className="item-desc">{props.item.descripiton}</div>
                <div className="item-stock">
                  Stock:{" "}
                  {props.item.stock > 7 ? (
                    <span className="in-stock">{props.item.stock}</span>
                  ) : props.item.stock > 0 ? (
                    <span className="low-stock">{props.item.stock}</span>
                  ) : (
                    outOfStock
                  )}
                </div>
                <div className="item-price">{props.item.price}$</div>
                <form>
                  <input
                    type="number"
                    value={qty}
                    id="qty"
                    className="qty-input"
                    onChange={(e) => setQty(e.target.value)}
                  />
                  <button
                    type="button"
                    className="buy-bttn"
                    onClick={() => props.addItemToCart(props.item.id, qty)}
                  >
                    Add To Cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Item;
