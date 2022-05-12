import {applyMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';

export const sagaMiddleware = createSagaMiddleware();

const Logger = createLogger({
  collapsed: true,
  diff: true,
});

let middlewares = [sagaMiddleware];

if (__DEV__) {
  middlewares = [...middlewares, Logger];
}

export const appliedMiddleware = applyMiddleware(...middlewares);
