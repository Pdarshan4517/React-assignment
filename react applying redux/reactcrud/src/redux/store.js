import { createStore,applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {thunk} from 'redux-thunk';
import rootReducer from './root-reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore (rootReducer, applyMiddleware(...middlewares));

export default store;
