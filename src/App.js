import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import SignInPage from "./pages/SignIn/SignInPage";
import Header from "./components/Header/Header";
import { auth, createUserProfileDocument } from './firebase/firabase.utils';

import "./App.css";

function App() {
  const [userLogged, setUserLogged] = useState(null);
  console.log(userLogged);

  useEffect(() => {
    auth.onAuthStateChanged( async userAuth => {
       if (userAuth) {
         const userRef = await createUserProfileDocument(userAuth);
         userRef.onSnapshot(snapShot => {
           setUserLogged({
             id: snapShot.id,
             ...snapShot.data()
           } )
         })         
       } else {
         setUserLogged(userAuth);
       }
    })
  }, [auth]);

  return (
    <>
      <Router>
        <Header currentUser={userLogged} />
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
