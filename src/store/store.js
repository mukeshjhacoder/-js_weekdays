/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import appReducer from '../reducer/index';
const store = createStore(appReducer);

export default store;