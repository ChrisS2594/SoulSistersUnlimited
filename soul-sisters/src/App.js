import React from 'react';
import Nav from './Components/Nav/Nav';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
//  import logo from "Logo.jpg"; Working to import logo in the future.
import Logo from "./Logo.jpg";


// return <img src ={logo} alt= "Logo" />
function App() {
  return (

    <Router>

      <div className="App">
        <header className="App-header">
          <img src={Logo} className="Logo" alt="Logo"></img>
          <Nav />
          <h1 id="head">Crafting. Creating. Loving Every Minute Of It!</h1>
        </header>
      </div>
    </Router>
  );
}

export default App;
