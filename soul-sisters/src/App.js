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
import Logo from "./Logo.jpg";
import Splash from "./Pages/splash";
import Crafts from "./Pages/product";




// Beginning function of application
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
      {/* building routes for pages  */}
      <Route exact path="/" component={Splash} />
      <Route exact path="/product" component={Crafts} />

    </Router>
  );
}

export default App;
