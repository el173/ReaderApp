import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';

import RootReducer from './reducers';
import {appliedMiddleware, sagaMiddleware} from './middlewares';
import {initSagas} from './actions';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: null,
  whitelist: [],
};

export default function createStore() {
  const persistedReducer = persistReducer(persistConfig, RootReducer);
  const store = configureStore(
    persistedReducer,
    composeWithDevTools(appliedMiddleware),
  );
  const persistor = persistStore(store);
  initSagas(sagaMiddleware);
  return {store, persistor};
}
