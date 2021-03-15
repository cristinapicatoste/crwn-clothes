import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";

import "./App.css";

const Hats = () => (
  <div>
    <h1>HATS</h1>
  </div>
);

function App() {
  return (
    <>
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
