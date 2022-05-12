import {takeLatest, put} from 'redux-saga/effects';

import {HACKER_NEWS_TOP_STORIES} from '../api';
import {makeApiCall, getAPI} from '../lib/Utils';

import {GET_TOP_STORIES, GET_TOP_STORIES_OK} from '../actionTypes';

const getTopStories = function* ({payload}) {
  const storiesResponse = yield makeApiCall(getAPI(HACKER_NEWS_TOP_STORIES));
  yield put({type: GET_TOP_STORIES_OK, storiesResponse});
};

export function* getTopStoriesSaga() {
  yield takeLatest(GET_TOP_STORIES, getTopStories);
}
