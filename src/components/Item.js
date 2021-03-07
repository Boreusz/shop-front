import React from "react";
import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import "../styles/item.css";

const Item = (props) => {
  return (
    <div className="item_container">
      <div className="item_wrapper">
        <main className="item_main">
          <div>
            <header className="header">
              <div className="item-name">{props.item.name}</div>
            </header>
            <div className="item-info">
              <img
                className="item-image"
                src={props.item.image}
                alt={props.item.name}
              />
              <div>
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
