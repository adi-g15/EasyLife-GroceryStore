import CartReducer from "./cart";
import ProductReducer from "./products";
import { combineReducers } from "redux"

export default combineReducers( CartReducer, ProductReducer );
