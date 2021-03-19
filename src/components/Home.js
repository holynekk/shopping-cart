import React from 'react';
import './../styles/home.css';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div id="home">
            <Link to="shop">
                <p id="shopBtn"> Let's Burn Some Money!</p>
            </Link>
        </div>
    );
}


export default Home;