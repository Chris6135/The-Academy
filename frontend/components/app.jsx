import React from "react";
import UserToggleContainer from "./user_toggle/user_toggle_container"
import Signup from "./signup/signup_container"
import Signin from "./signin/signin_container"

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

const App = () => (
  <div>
    <header>
            <UserToggleContainer/> 
    </header>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />

    <p>Im the app.</p>
  </div>
);

export default App;