
import React, { useEffect } from 'react';
import data from './../data/data.js';
import Product from './Product.js';
import Summary from './Summary.js';
import './../styles/checkout.css';

function Checkout(props) {
  const { cartItems } = props;
  console.log(props);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Checkout';
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <div id="checkout">
      <div id="cart-header-main">
          <p id="cart-header">Shopping Cart</p>
          <div id="line"> </div>
      </div>
      <div id="cartItems">
        {[...cartItems.keys()].map((key) => {
          return (
            <Product
              item={data.find((thatProduct)=>key===thatProduct.id)}
              key={key}
              link={key}
              showModifier={true}
              quantity={cartItems.get(key) || 0}
              increment={props.incrementCart}
              decrement={props.decrementCart}
            />
          );
        })}
      </div>
      {cartItems.size === 0 ? (
        <div id="emptyCartInfo">
          <p>Your Cart is Empty!</p>
        </div>
      ) : (
        <Summary cartItems={cartItems} reset={props.resetCart} />
      )}
    </div>
  );
}

export default Checkout;