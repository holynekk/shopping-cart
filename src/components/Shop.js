import React, { useEffect } from 'react';
import Product from './Product.js';
import data from './../data/data.js';
import '../styles/shop.css';



function Shop(){
    useEffect(()=>{
        const originalTitle = document.title;
        document.title = 'Shop';
        return ()=>{
            document.title = originalTitle;
        };
    });

    return(
        <div id="shop">
            
            {[...data].map((product)=>{
                return(
                    <Product 
                        item={product}
                        showModifier={false}
                    />
                );
            })}
        </div>
    );
}

export default Shop;


