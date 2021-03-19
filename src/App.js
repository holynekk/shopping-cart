import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Header from './components/Header.js';
import Home from './components/Home.js';
import Shop from './components/Shop.js';
import DetailPage from './components/DetailPage.js';
import Checkout from './components/Checkout.js';
import Complete from './components/Complete.js';
// Styling
import './styles/App.css';

function App() {

  const [cartItems, setCartItems] = useState(new Map());
  const [cartItemAmount, setItemCount] = useState(0);

  function addToCart(itemId, amount){
    const current = cartItems.get(itemId) || 0;
    const nwAmount = amount + current;

    const nwCartItems = new Map(cartItems);
    nwCartItems.set(itemId, nwAmount);

    setCartItems(nwCartItems);
  }

  function incrementCart(key) {
    addToCart(key, 1);
  }


  function emptyCart(){
    const nwCart = new Map();
    setCartItems(nwCart);
  }

  function decrementCart(key) {
    const currentQty = cartItems.get(key) || 0;
    if (currentQty > 1) {
      const newQty = currentQty - 1;

      const newCartItems = new Map(cartItems);
      newCartItems.set(key, newQty);

      setCartItems(newCartItems);
    } else {
      const newCartItems = new Map(cartItems);
      newCartItems.delete(key);

      setCartItems(newCartItems);
    }
  }

  useEffect(() => {
    let newCount = 0;
    for (let value of cartItems.values()) {
      newCount += value;
    }
    setItemCount(newCount);
  }, [cartItems]);


  return (
    <BrowserRouter baseName={process.env.PUBLIC_URL + '/'}>
      <Header itemCount={cartItemAmount}/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/shop" component={Shop} />
        <Route 
          exact 
          path="/shop/:id"
          render={(props)=>(
            <DetailPage 
              {...props}
              itemsInCart = {cartItems}
              addToCart={addToCart}
            />
          )}
        />
        <Route
          exact
          path="/checkout"
          render={(props)=>(
            <Checkout 
              {...props}
              cartItems={cartItems}
              incrementCart={incrementCart}
              decrementCart={decrementCart}
              resetCart={emptyCart}
            />
          )}
        />
        <Route exact path="/complete" component={Complete} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
