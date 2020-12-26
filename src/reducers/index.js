import CartReducer from "./cart";
import ScreenReducer from "./screen"
import UserReducer from "./user"
import FilterReducer from "./filter"
import { combineReducers } from "redux"

export default combineReducers({
    cart: CartReducer,
    screen: ScreenReducer,
    user: UserReducer,
    filter: FilterReducer
});
