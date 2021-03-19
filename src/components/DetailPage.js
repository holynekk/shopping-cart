import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import data from './../data/data.js';

// Styling
import "./../styles/detailPage.css";

function DetailPage(props){
    const {goBack} = useHistory();
    const key = props.match.params.id;
    const item = data.find((dataItem) => dataItem.id === key);


    useEffect(()=>{
        const originalTitle = document.title;
        document.title = item.name;
        return()=>{
            document.title = originalTitle;
        };
    });

    return(
    <div id="detail-main">
        <p id="backBtn" onClick={goBack}>{`< BACK`}</p>
        <div id="detail-info">
            <div id="image">
                <img id="item-image" src={item.img}/>
            </div>
            <div id="detailed-info">
                <p id="item-name">{item.name}</p>

                <p id="item-price">{item.price}</p>
                
                <ul id="item-components">
                    <li>{item.cpu}</li> 
                    <li>{item.gpu}</li> 
                    <li>{item.display}</li> 
                    <li>{item.storage}</li> 
                </ul>

                <div id="addBtn" onClick={() => props.addToCart(key, 1)}>
                    <FaShoppingCart id="cartIcon" />
                    <p>ADD TO CART</p>
                </div>
            </div>

        </div>
        <div id="comments">

        </div>
        
    </div>
    );
}

export default DetailPage;