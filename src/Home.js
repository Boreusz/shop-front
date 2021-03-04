import React from "react";
import { Link } from "react-router-dom";
import './styles/home.css'
const Home = () => {
  return (
    <div id='home'>
      <h1>Make yourself special gift with our seasonal offer! </h1>
      <h3>Each month we take care to provide you carrefully selected unusual house plants! <br/>
      Check what we prepared this month and ake your home unique!</h3>
      <Link to="/shop">SHOP NOW</Link>
    </div>
  );
};

export default Home;
