import React from "react"
import ReactDOM from 'react-dom';
import configureStore from "./store/store"

document.addEventListener('DOMContentLoaded', ()=> {
   const root = document.getElementById('root')
   const store = configureStore()

   window.store = store
  
  ReactDOM.render(<h1> we're hooked</h1>, root);
  console.log(store)
})