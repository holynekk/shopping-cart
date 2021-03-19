import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

// Styling
import './../styles/header.css';


function Header(props){

    const [isDim, setIsDim] = useState(false);

    useEffect(()=>{
        if (props.itemCount === 0){
            return;
        }
        setIsDim(true);
        setTimeout(()=>{
            setIsDim(false);

        }, 200);
    }, [props.itemCount]);

    return(
        <header>
            <Link to="/">
                <h1 id="just-header">Holy-BUY</h1>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">HOME</Link>
                    </li>
                    <li>
                        <Link to="/shop">SHOP</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                </ul>
            </nav>
            <Link to="/checkout">
                <div id="cart">
                    <FaShoppingCart id="cart-icon"/>
                    <p id="cartCount">{props.itemCount}</p>
                </div>
            </Link>
        </header>
    );
}

export default Header;