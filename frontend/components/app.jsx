import React from "react";
import UserToggleContainer from "./constants/navbar/user_toggle/user_toggle_container"
import Signup from "./forms/signup/signup_container"
import Signin from "./forms/signin/signin_container"
import NavBar from "./constants/navbar/nav_bar_container"
import Splash from "./splash/splash"
import SearchNav from "./constants/searchbar/searchbar_nav"
import Footer from "./constants/footer/footer_container"
import LessonEdit from "./lessons/lesson_edit_container"
import Modal from "./lessons/modal_placeholder_container"
import {AuthRoute} from "../util/route_util"
import StepEditPage from "../components/lessons/step/step_edit_page_container"


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
            <Route exact path="/lesson/new" component={Modal} /> 
            <Route exact path="/lesson/edit/:lessonId" component={LessonEdit}/>
            <Route exact path="/step/:id" component={StepEditPage}/>
        />


    <footer>
        <Footer/>
    </footer>
  </div>
);

export default App;