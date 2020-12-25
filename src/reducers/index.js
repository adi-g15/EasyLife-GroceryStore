import CartReducer from "./cart";
import ProductReducer from "./products";
import ScreenReducer from "./screen"
import { combineReducers } from "redux"

export default combineReducers({
    cart: CartReducer,
    product: ProductReducer,
    screen: ScreenReducer
});
