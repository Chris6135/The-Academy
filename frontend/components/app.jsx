import React from "react";
import UserToggleContainer from "./constants/navbar/user_toggle/user_toggle_container"
import Signup from "./forms/signup/signup_container"
import Signin from "./forms/signin/signin_container"
import NavBar from "./constants/navbar/nav_bar"
import NavBoxContainer from "./constants/navbar/nav_box/nav_box_container"
import Splash from "./splash/splash"
import SearchNav from "./constants/searchbar/searchbar_nav"
import Footer from "./constants/footer/footer"

import {
    Route,
    Link
  } from 'react-router-dom';

const App = () => (
  <div>
    <header>
        <NavBar />
        <SearchNav />

    </header>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route exact path="/" component={Splash} /> 

    <footer>
        <Footer/>
        {/* <NavBoxContainer />  */}
    </footer>
  </div>
);

export default App;