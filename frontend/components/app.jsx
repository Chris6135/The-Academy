import React from "react";
import UserToggleContainer from "./constants/navbar/user_toggle/user_toggle_container"
import Signup from "./forms/signup/signup_container"
import Signin from "./forms/signin/signin_container"
import NavBar from "./constants/navbar/nav_bar_container"
import Splash from "./splash/splash"
import SearchNav from "./constants/searchbar/searchbar_nav"
import Footer from "./constants/footer/footer_container"
import Lesson from "./lessons/lessons_showpage"
import Modal from "./lessons/modal_placeholder_container"
import {AuthRoute} from "../util/route_util"


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
            <AuthRoute exact path="/signup" component={Signup} />
            <AuthRoute exact path="/signin" component={Signin} />
            <Route exact path="/" component={Splash} /> 
            <Route exact path="/new/lesson" component={Modal} /> 
            <Route path="/lesson/:lessonId" component={Lesson}
        />


    <footer>
        <Footer/>
    </footer>
  </div>
);

export default App;