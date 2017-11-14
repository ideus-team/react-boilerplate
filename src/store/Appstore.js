/* global window */
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import apiMiddleware from '../middleware/example';

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(apiMiddleware)));

window.appStore = store;
export default store;
