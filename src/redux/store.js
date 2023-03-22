import { createStore } from "redux";
import rootReduser from "./rootReduser";
import {composeWithDevTools}from 'redux-devtools-extension'
  
const store =createStore(rootReduser ,composeWithDevTools());



export default store