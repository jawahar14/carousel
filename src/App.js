import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Locations from "./components/locations/Locations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/about' component={About} />
        <Route path='/locations' component={Locations} />
        <Route path='/contact' component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
