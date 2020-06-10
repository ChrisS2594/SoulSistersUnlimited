import React from "react";
import "./../App.scss";
import {
    BrowserRouter as Router,
    Link,

    //BrowserHistory
} from "react-router-dom";
function Splash() {
    return (
        <div>
            <div className="about">
                <h3>About Us</h3>
                <p>Our mission is to creatively inspire other soul sisters and misters with our handmade products, organizing solutions and inspirational videos and posts.</p>
                <p>Handmade Tumblers, Cups, Signs, shirts and more! We can customize just about anything you want!</p>

            </div>
            <div className="event">
            
                Events will be here
        {/* this is going to be where updated events will be or deadlines for orders */}
                </div>


            <div className="us">
                <p>Our Names are Brianna And Crystal. This company was founded as of 2019. Each month we donate a portion of our profits
       to a different charity organization. </p>
            </div>

            <div className="product">
                <h3>Our Products</h3>
                <p>While we carry these products, each can be customized per your wants!</p>
                <ul>
                    <li>Tumblers</li>
                    <li>Trays</li>
                    <li>T-Shirts</li>
                    <li>Vehicle Decals</li>
                    <li>keychains</li>

                </ul>
            </div>
        </div>

    );
}

export default Splash;