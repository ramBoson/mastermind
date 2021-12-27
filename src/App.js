import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/HomePage';
import ContactUs from './components/ContactUs';
import Invest from './components/Invest';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/invest">
          <Invest />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
