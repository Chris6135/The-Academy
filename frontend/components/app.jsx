import React from "react";
import UserToggleContainer from "./constants/navbar/user_toggle/user_toggle_container"
import Signup from "./forms/signup/signup_container"
import Signin from "./forms/signin/signin_container"
import NavBar from "./constants/navbar/nav_bar_container"
import Splash from "./splash/splash"
import SearchNav from "./constants/searchbar/searchbar_nav"
import Footer from "./constants/footer/footer_container"
import LessonEdit from "./lessons/edit/lesson_edit_container"
import CreateLesson from "./lessons/edit/new_lesson_page_container"
import {AuthRoute, ProtectedRoute,PrivateRoute} from "../util/route_util"
import StepEditPage from "../components/lessons/step/step_edit_page_container"
import UserDrafts from "../components/user/user_show_container"
import Modal from "./constants/modal/modal"
import LessonDraftShow from "./lessons/lesson/draft_lesson_show_container"
import PublishLesson from "./lessons/lesson/publish_lesson_container"
import CategoryPage from "./lessons/categories/category_container"
import UserPublished from "./user/user_published_container"


import {
    Route,
    Link
  } from 'react-router-dom';

const App = () => (
  <div>
    <Modal />
    <header>
        <NavBar />
        <SearchNav />

    </header>
            <AuthRoute exact path="/signup" component={Signup} />
            <AuthRoute exact path="/signin" component={Signin} />
            <Route exact path="/" component={Splash} /> 
            <Route exact path="/category/:categoryId" component={CategoryPage} /> 
            <ProtectedRoute exact path="/lesson/new" component={CreateLesson} /> 
            <ProtectedRoute exact path="/lesson/edit/:lessonId" component={LessonEdit}/>
            <ProtectedRoute exact path="/step/:id" component={StepEditPage}/>
            <ProtectedRoute exact path="/user/drafts" component={UserDrafts}/>
            <ProtectedRoute exact path="/user/show" component={UserPublished}/>
            <Route exact path="/lesson/show/draft/:lessonId" component={LessonDraftShow}/>
            <ProtectedRoute exact path="/lesson/publish/:lessonId" component={PublishLesson}/>




    <footer>
        <Footer/>
    </footer>
  </div>
);

export default App;