import {takeLatest, put} from 'redux-saga/effects';

import {GET_TOP_STORIES, GET_TOP_STORIES_OK} from '../actionTypes/MainView';

const getTopStories = function* ({payload}) {
  yield put({type: GET_TOP_STORIES_OK, payload});
};

export function* getTopStoriesSaga() {
  yield takeLatest(GET_TOP_STORIES, getTopStories);
}
