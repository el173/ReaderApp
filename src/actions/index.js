import {
  getTopStoriesSaga,
  getTopStoriesDetailsSaga,
  setTopStoriesRefreshingSaga,
} from './MainView';
import {getItemDetailsSaga, clearItemDetailsSaga} from './DetailView';

const sagas = [
  getTopStoriesSaga,
  getItemDetailsSaga,
  getTopStoriesDetailsSaga,
  setTopStoriesRefreshingSaga,
  clearItemDetailsSaga,
];

export const initSagas = sagaMiddleware =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));
