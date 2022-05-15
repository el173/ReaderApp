import {
  getTopStoriesSaga,
  getTopStoriesDetailsSaga,
  setTopStoriesRefreshingSaga,
} from './MainView';
import {getItemDetailsSaga} from './DetailView';

const sagas = [
  getTopStoriesSaga,
  getItemDetailsSaga,
  getTopStoriesDetailsSaga,
  setTopStoriesRefreshingSaga,
];

export const initSagas = sagaMiddleware =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));
