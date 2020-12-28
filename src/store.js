import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import appReducers from "./reducers";   // this is short for importing './reducers/index'
import { composeWithDevTools } from "redux-devtools-extension";
import process from "process";

const storeEnhancers = process.env.NODE_ENV !== "development" ? 
	composeWithDevTools(
		applyMiddleware( thunk )
	): applyMiddleware(thunk);

const store = createStore(appReducers, storeEnhancers);

export default store;
