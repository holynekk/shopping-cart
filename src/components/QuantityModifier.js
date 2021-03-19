import React from 'react';
import "./../styles/quantity.css";

function QuantityModifier(props) {
  return (
    <div className="quantityModifier">
      <p
        className="decrement btn"
        onClick={() => props.decrement(props.itemKey)}
      >
        -
      </p>
      <p className="quantityValue">{props.quantity}</p>
      <p
        className="increment btn"
        onClick={() => props.increment(props.itemKey)}
      >
        +
      </p>
    </div>
  );
}

export default QuantityModifier;