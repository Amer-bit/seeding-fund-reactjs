import {combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import auth from '../reducer/auth';
import funds from '../reducer/funds';

// I will combine reducers here. 
let reducers = combineReducers({auth, funds});

// create my store and pass this reducers variable 
// and use thunk to be able to call dispatch async
const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store();