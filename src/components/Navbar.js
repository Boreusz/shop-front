import React from "react";
import { Link } from "react-router-dom";
import { BsBagFill } from "react-icons/bs";
import "../styles/navbar.css";

const NavBar = (props) => {
  return (
    <header className="navbar">
      <nav>
        <Link to="/">ORIOLE</Link>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">
              <span>
                {props.number > 0 ? props.number : null}
                <BsBagFill />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
