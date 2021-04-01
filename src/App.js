import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import SignInPage from "./pages/SignIn/SignInPage";
import Header from "./components/Header/Header";
import { auth, createUserProfileDocument } from './firebase/firabase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import "./App.css";

function App() {
  // const [userLogged, setUserLogged] = useState(null);
  console.log(setCurrentUser);

  useEffect(() => {
    // auth.onAuthStateChanged( async userAuth => {
    //    if (userAuth) {
    //      const userRef = await createUserProfileDocument(userAuth);
    //      userRef.onSnapshot(snapShot => {
    //        setUserLogged({
    //          id: snapShot.id,
    //          ...snapShot.data()
    //        } )
    //      })         
    //    } else {
    //      setUserLogged(userAuth);
    //    }
    // })
    auth.onAuthStateChanged( async userAuth => {
       if (userAuth) {
         const userRef = await createUserProfileDocument(userAuth);
         userRef.onSnapshot(snapShot => {
           setCurrentUser({
             id: snapShot.id,
             ...snapShot.data()
           } )
         })         
       } else {
         setCurrentUser(userAuth);
       }
    })
  }, [auth]);

  return (
    <>
      <Router>
        {/* <Header currentUser={userLogged} /> */}
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={Shop} />
            {/* <Route path="/signin" component={SignInPage} /> */}
            <Route path="/signin" render={() => setCurrentUser.payload ? (<Redirect to='/' />) : (<SignInPage />) } />
          </Switch>
        </div>
      </Router>
    </>
  );
}

const mapStateToProps = (user) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
