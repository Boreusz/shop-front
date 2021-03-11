import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/items";
import "../styles/shop.css";

const Shop = (props) => {
  const [dataToPrint, setData] = useState(data);
  const [currentFilter, setCurrentFilter] = useState('All')
  const filterData = (category) => {
    if (category === "all") {
      setData(data);
    } else {
      let newData = data.filter(item => item.category === category)
      setData(newData)
    }
    setCurrentFilter(category[0].toUpperCase() + category.slice(1))
  };
  useEffect(() => {
    document.title = "Oriole - Shop";
  });
  return (
    <div className="shop_container">
      <div className="shop_wrapper">
        <aside className="shop_side">
          <h2 className="shop_side-title">Products/<span>{currentFilter}</span></h2>
          <ul className="side_list">
            <li className="side_list-element">
              <button className="navi-bttn" type="button" onClick={() => filterData("all")}>
                All
              </button>
            </li>
            <li className="side_list-element">
              <button className="navi-bttn" type="button" onClick={() => filterData("small")}>
                Small
              </button>
            </li>
            <li className="side_list-element">
              <button className="navi-bttn" type="button" onClick={() => filterData("medium")}>
                Medium
              </button>
            </li>
            <li className="side_list-element">
              <button className="navi-bttn" type="button" onClick={() => filterData("big")}>
                Big
              </button>
            </li>
          </ul>
        </aside>
        <main className="shop_main">
          <ul className="items_list">
            {dataToPrint.length ? (
              dataToPrint.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="items_list-element"
                    onClick={() => props.setSelectedItem(item)}
                  >
                    <Link to={`/shop/${item.id}`} className="element-link">
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
              })
            ) : (
              <div className="empty">There is no Plants in this category. <br/> Check again in a few days!</div>
            )}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Shop;
