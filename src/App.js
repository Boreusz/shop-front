import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Item from "./components/Item";
import "./styles/app.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('000')
  const selectItem = (id) =>{
    setSelectedItem(id)
  }
  return (
    <Router>
      <div >
      <Navbar number={cartItems.length} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" render={() => <Shop setSelectedItem={selectItem} />} />
          <Route path="/cart" render={(props) => <Cart {...props} />} />
          <Route path="/shop/:id" render={() => <Item item={selectedItem} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
