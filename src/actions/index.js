import {getTopStoriesSaga} from './MainView';

const sagas = [getTopStoriesSaga];

export const initSagas = sagaMiddleware =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));
