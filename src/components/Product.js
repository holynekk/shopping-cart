import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import QuantityModifier from './QuantityModifier.js';


// Styling
import './../styles/product.css';


function Product(props){

    const {item} = props;

    return(
        <>
            <Link  to={`/shop/${item.id}`}>
                <div className="item-card">
                    <img src={item.img} alt="product" />
                    <div className="info">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                </div>
            </Link>
            {props.showModifier ? (
                <QuantityModifier
                quantity={props.quantity}
                increment={props.increment}
                decrement={props.decrement}
                itemKey={props.link}
                />
            ) : null}
        </>
        
        
        
        
    );
}

export default Product;