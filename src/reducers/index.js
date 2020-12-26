import CartReducer from "./cart";
import ProductReducer from "./products";
import ScreenReducer from "./screen"
import UserReducer from "./user"
import { combineReducers } from "redux"

export default combineReducers({
    cart: CartReducer,
    product: ProductReducer,
    screen: ScreenReducer,
    user: UserReducer
});
