import CartReducer from "./cart";
import ScreenReducer from "./screen";
import UserReducer from "./user";
import FilterReducer from "./filter";
import { combineReducers } from "redux";
import SabjiReducer from "./sabjis";

export default combineReducers({
	cart: CartReducer,
	screen: ScreenReducer,
	user: UserReducer,
	filter: FilterReducer,
	sabjis: SabjiReducer    // for storing sabjis received from backend
});
