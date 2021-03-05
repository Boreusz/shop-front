import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
  useEffect(() => {
    document.title = "Oriole - Home";
  });
  return (
    <div class="home">
      <main>
        <section className="home__container">
          <h1>Make yourself special gift with our seasonal offer! </h1>
          <p>
            Each month we take care to provide you carefully selected unusual
            house plants! <br />
            Check what we prepared this month and make your home unique!
          </p>
          <Link to="/shop">SHOP NOW</Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
