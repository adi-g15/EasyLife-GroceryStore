import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducers from './reducers';   // this is short for importing './reducers/index'
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(appReducers, composeWithDevTools( applyMiddleware(thunk) ));

export default store;
