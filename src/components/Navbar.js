import React from "react";
import { Link } from "react-router-dom"
import { BsBagFill } from 'react-icons/bs'
import '../styles/navbar.css'

const NavBar = (props) => {
  return (
    <header className="navbar">
      <nav >
        <Link to="/">ORIOLE</Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart"><span>{props.number ? props.number : null}<BsBagFill /></span></Link>
          </li>
        </ul>
      </nav>
      <div className="separator"></div>
    </header>
  );
};
export default NavBar