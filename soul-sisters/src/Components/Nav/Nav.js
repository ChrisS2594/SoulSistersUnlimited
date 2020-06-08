import React from "react";
import "./style.scss";
import { BrowserRouter as Router,
Switch,
Route,
Link,
useRouteMatch,
useParams } from "react-router-dom";

function Nav() {
return (
    <nav id="nav" role="navigation">
    <a href="#nav" title="Show navigation">Show navigation</a>
    <a href="#" title="Hide navigation">Hide navigation</a>

    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a href="/" aria-haspopup="true"><span>Products</span></a>
        <ul>
        <li><Link to="#">Tumblers</Link></li>
        <li><Link to="#">Plates/Trays</Link></li>
        <li><Link to="#">Shirts</Link></li>
        <li><Link to="#">Bags</Link></li>
        <li><Link to ="#">Custom Requests</Link></li>
        
        </ul>
        </li>

      <li>
        <Link to="#">Order Status</Link>
      </li>
      <li>
        <a href="/" aria-haspopup="true"><span>Login</span></a>
        <ul>
        <li><Link to="#">Customer Login</Link></li>
        <li><Link to="#">Owner Login</Link></li>
        </ul>
        </li>
    </ul>

  </nav>

);

}


export default Nav;
