import React from 'react';
import { useHistory } from 'react-router-dom';
import data from './../data/data.js';
import { Link } from 'react-router-dom';

import './../styles/summary.css';

export default function Summary(props) {
  const { cartItems } = props;
  let total = 0;
  for (let [key, value] of cartItems) {
    const itemPrice = data.find((thatItem)=>thatItem.id === key).price.slice(1).replace(',','');
    const subtotal = parseInt(itemPrice) * parseInt(value);
    console.log("item price: " + itemPrice);
    console.log("value is: " + value);
    total += subtotal;
  }
  
  const { goBack } = useHistory();
  return (
    <div id="summary">
      <p id="back" onClick={goBack}>{`< BACK`}</p>
      <p id="total">${total.toLocaleString()}.00</p>
      <Link to="/complete">
        <p id="completeBtn" onClick={() => props.reset()}>
          COMPLETE ORDER
        </p>
      </Link>
    </div>
  );
}