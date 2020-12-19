import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducers from './reducers';   // this is short for importing './reducers/index'

const store = createStore(appReducers, applyMiddleware(thunk));

export default store;
