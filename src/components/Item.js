import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import "../styles/item.css";

const outOfStock = <span className="out-of-stock"> Sorry, already gone!</span>;
const Item = (props) => {
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
                  {props.item.stock !== 0 ? (
                    <span className="in-stock">{props.item.stock}</span>
                  ) : (
                    outOfStock
                  )}
                </div>
                <div className="item-price">{props.item.price}</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Item;
