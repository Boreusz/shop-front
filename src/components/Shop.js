import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data/items";
import "../styles/shop.css";

const Shop = (props) => {
  useEffect(() => {
    document.title = "Oriole - Shop";
  });
  return (
    <div className="shop_container">
      <div className="shop_wrapper">
        <aside className="shop_side">
          <h2>Categories</h2>
          <ul className='side_list'>
            <li className='side_list-element'>
              <Link to='/shop'>All</Link>
            </li>
             <li className='side_list-element'>
              <Link to='/shop'>Small</Link>
            </li>
            <li className='side_list-element'>
              <Link to='/shop'>Medium</Link>
            </li>
            <li className='side_list-element'>
              <Link to='/shop'>Big</Link>
            </li>
          </ul>
        </aside>
        <main className="shop_main">
          <ul className='items_list'>
            {data.map((item) => {
              return (
                <li key={item.id} className='items_list-element' onClick={() => props.setSelectedItem(item)}>
                  <Link to={`/shop/${item.id}`} className='element-link'>
                    <div>
                      <img
                        className="element-image"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="element-name">{item.name}</div>
                      <div className="element-price">{item.price}</div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Shop;
