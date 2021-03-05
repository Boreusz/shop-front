import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/shop.css";

const Shop = () => {
  useEffect(() => {
    document.title = "Oriole - Shop";
  });
  return (
    <div className="shop_container">
      <div className="shop_wrapper">
        <aside>
          <h2>Categories</h2>
          <ul>
            <li>
              <Link>All</Link>
            </li>
            <li>
              <Link>Small</Link>
            </li>
            <li>
              <Link>Medium</Link>
            </li>
            <li>
              <Link>Big</Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Shop;
