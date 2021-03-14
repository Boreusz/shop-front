import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Item from "./components/Item";
import data from './data/items'
import "./styles/app.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsNumber, setCartItemsNumber] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [selectedItem, setSelectedItem] = useState('000')
  const addItemToCart = (id, qty) => {
    let itemInCart = Object.assign({}, data.find (item => item.id === id))
    if(qty <= itemInCart.stock){
      data.find(item => item.id === id).stock -= qty;
      let ItemAppeared = cartItems.find(item => item.id === itemInCart.id)
      if(ItemAppeared){
        ItemAppeared.stock += qty
        setCartItemsNumber(cartItemsNumber + parseInt(qty))
        updatePrice()
      }else{
      itemInCart.stock = qty
      setCartItemsNumber(cartItemsNumber + parseInt(qty))
      setCartItems(cartItems.concat(itemInCart))
      }

    }else{
      alert("We don't have enough of it in stock")
    }
  }
  const deleteItemFromCart = (id, qty = 0) => {
    let deletedItem = cartItems.find(item => item.id === id);
    if(qty > 0 && qty != deletedItem.stock){
      setCartItemsNumber(cartItemsNumber - qty);
      data.find(item => item.id === id).stock += qty;
      deletedItem.stock -= qty;
      updatePrice()
    }else {
      setCartItemsNumber(cartItemsNumber - deletedItem.stock);
      data.find(item => item.id === id).stock += deletedItem.stock;
      setCartItems(cartItems.filter(item => item.id != id))
    }
  }
  const updatePrice = () =>{
    let total = 0;
    cartItems.forEach((element) => total += element.stock*element.price);
    setTotalPrice(total.toFixed(2))
  }
  useEffect(() => {
      updatePrice()
    }, [cartItems])
  return (
    <Router>
      <div>
      <Navbar number={cartItemsNumber} />
        <Switch>
          <Route exact path="/shop" render={() => <Shop setSelectedItem={setSelectedItem} />} />
          <Route path="/cart" render={() => <Cart items={cartItems} deleteItem={deleteItemFromCart} addItemToCart={addItemToCart} totalPrice={totalPrice} />} />
          <Route path="/shop/:id" render={() => <Item item={selectedItem} addItemToCart={addItemToCart} input />} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
