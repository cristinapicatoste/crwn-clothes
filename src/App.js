import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

import "./App.css";

const Hats = () => (
  <div>
    <h1>HATS</h1>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/hats" component={Hats} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
