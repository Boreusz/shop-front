import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Item from './components/Item';
import Cart from './components/Cart';
import "./styles/app.css";

const App = () => {
  const [cartItems, setCartItems] = useState([])

  return (
    <Router>
      <Navbar number={cartItems.length}/>
     <main className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
