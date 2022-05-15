import {applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';

export const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];

if (__DEV__) {
  const Logger = createLogger({
    collapsed: true,
    diff: true,
  });
  middlewares = [...middlewares, Logger];
}

export const appliedMiddleware = applyMiddleware(...middlewares);
