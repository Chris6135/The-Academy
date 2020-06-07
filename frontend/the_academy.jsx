import React from "react"
import ReactDOM from 'react-dom';
import configureStore from "./store/store"
import Root from "./components/root"
import {fetchCategories} from "./actions/lessons/lesson_actions"


document.addEventListener('DOMContentLoaded', ()=> {
   const root = document.getElementById('root')
   let preloadedState = {}
   if (window.currentUser){
        preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
                }
            }
         }
    const store = configureStore(preloadedState)
    debugger
    window.store = store
 
  
  ReactDOM.render(<Root store = {store}/>, root);
})