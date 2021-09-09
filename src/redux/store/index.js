import {combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducer'

let reducers = combineReducers(rootReducer);

// create my store and pass this reducers variable 
// and use thunk to be able to call dispatch async
const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store();