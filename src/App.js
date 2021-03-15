import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import SignInPage from "./pages/SignIn/SignInPage";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <>
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
