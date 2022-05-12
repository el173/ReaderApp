import {takeLatest, put} from 'redux-saga/effects';

import {HACKER_NEWS_TOP_STORIES} from '../api';
import {makeApiCall, getAPI} from '../lib/Utils';

import {GET_TOP_STORIES, GET_TOP_STORIES_OK} from '../actionTypes';

const getTopStories = function* ({payload}) {
  // const storiesResponse = yield makeApiCall(getAPI(HACKER_NEWS_TOP_STORIES));

  let storiesResponse = [
    {
      by: 'dhouston',
      descendants: 71,
      id: 8863,
      kids: [
        9224, 8917, 8952, 8958, 8884, 8887, 8869, 8873, 8940, 8908, 9005, 9671,
        9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125, 8998, 8901,
        8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876,
      ],
      score: 104,
      time: 1175714200,
      title: 'My YC app: Dropbox - Throw away your USB drive',
      type: 'story',
      url: 'http://www.getdropbox.com/u/2/screencast.html',
    },
    {
      by: 'dhouston',
      descendants: 71,
      id: 8863,
      kids: [
        9224, 8917, 8952, 8958, 8884, 8887, 8869, 8873, 8940, 8908, 9005, 9671,
        9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125, 8998, 8901,
        8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876,
      ],
      score: 104,
      time: 1175714200,
      title: 'My YC app: Dropbox - Throw away your USB drive',
      type: 'story',
      url: 'http://www.getdropbox.com/u/2/screencast.html',
    },
    {
      by: 'dhouston',
      descendants: 71,
      id: 8863,
      kids: [
        9224, 8917, 8952, 8958, 8884, 8887, 8869, 8873, 8940, 8908, 9005, 9671,
        9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125, 8998, 8901,
        8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876,
      ],
      score: 104,
      time: 1175714200,
      title: 'My YC app: Dropbox - Throw away your USB drive',
      type: 'story',
      url: 'http://www.getdropbox.com/u/2/screencast.html',
    },
  ];

  yield put({type: GET_TOP_STORIES_OK, payload: storiesResponse});
};

export function* getTopStoriesSaga() {
  yield takeLatest(GET_TOP_STORIES, getTopStories);
}
