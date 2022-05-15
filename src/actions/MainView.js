import {takeLeading, put, select, takeLatest} from 'redux-saga/effects';

import {HACKER_NEWS_TOP_STORIES} from '../api';
import {makeApiCall, getAPI} from '../lib/Utils';
import {getItemDetails} from './Common';

import {
  GET_TOP_STORIES,
  GET_TOP_STORIES_OK,
  GET_TOP_STORIES_INFO,
  GET_TOP_STORIES_INFO_OK,
  SET_TOP_STORY_REFRESHING_OK,
  SET_TOP_STORY_REFRESHING,
} from '../actionTypes';
import {TOP_STORY_CHUNK_SIZE} from '../config';

const getTopStories = function* ({payload}) {
  const storiesResponse = yield makeApiCall(getAPI(HACKER_NEWS_TOP_STORIES));
  if (storiesResponse && storiesResponse.success) {
    let topStoryObj = [];
    for (
      let i = 0;
      i < storiesResponse.data.length;
      i += TOP_STORY_CHUNK_SIZE
    ) {
      topStoryObj.push(storiesResponse.data.slice(i, i + TOP_STORY_CHUNK_SIZE));
    }
    yield put({
      type: GET_TOP_STORIES_OK,
      payload: topStoryObj,
    });
  }
  // else {
  //   let ss = [
  //     {
  //       by: 'dhouston',
  //       descendants: 71,
  //       id: 8863,
  //       kids: [
  //         9224, 8917, 8952, 8958, 8884, 8887, 8869, 8873, 8940, 8908, 9005,
  //         9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125,
  //         8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876,
  //       ],
  //       score: 104,
  //       time: 1175714200,
  //       title: 'My YC app: Dropbox - Throw away your USB drive',
  //       type: 'story',
  //       url: 'http://www.getdropbox.com/u/2/screencast.html',
  //     },
  //     {
  //       by: 'dhouston',
  //       descendants: 71,
  //       id: 8863,
  //       kids: [
  //         9224, 8917, 8952, 8958, 8884, 8887, 8869, 8873, 8940, 8908, 9005,
  //         9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125,
  //         8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876,
  //       ],
  //       score: 104,
  //       time: 1175714200,
  //       title: 'My YC app: Dropbox - Throw away your USB drive',
  //       type: 'story',
  //       url: 'http://www.getdropbox.com/u/2/screencast.html',
  //     },
  //     {
  //       by: 'dhouston',
  //       descendants: 71,
  //       id: 8863,
  //       kids: [
  //         9224, 8917, 8952, 8958, 8884, 8887, 8869, 8873, 8940, 8908, 9005,
  //         9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125,
  //         8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876,
  //       ],
  //       score: 104,
  //       time: 1175714200,
  //       title: 'My YC app: Dropbox - Throw away your USB drive',
  //       type: 'story',
  //       url: 'http://www.getdropbox.com/u/2/screencast.html',
  //     },
  //     {
  //       by: 'dhouston',
  //       descendants: 71,
  //       id: 8863,
  //       kids: [
  //         9224, 8917, 8952, 8958, 8884, 8887, 8869, 8873, 8940, 8908, 9005,
  //         9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125,
  //         8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876,
  //       ],
  //       score: 104,
  //       time: 1175714200,
  //       title: 'My YC app: Dropbox - Throw away your USB drive',
  //       type: 'story',
  //       url: 'http://www.getdropbox.com/u/2/screencast.html',
  //     },
  //     {
  //       by: 'dhouston',
  //       descendants: 71,
  //       id: 8863,
  //       kids: [
  //         9224, 8917, 8952, 8958, 8884, 8887, 8869, 8873, 8940, 8908, 9005,
  //         9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125,
  //         8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876,
  //       ],
  //       score: 104,
  //       time: 1175714200,
  //       title: 'My YC app: Dropbox - Throw away your USB drive',
  //       type: 'story',
  //       url: 'http://www.getdropbox.com/u/2/screencast.html',
  //     },
  //     {
  //       by: 'dhouston',
  //       descendants: 71,
  //       id: 8863,
  //       kids: [
  //         9224, 8917, 8952, 8958, 8884, 8887, 8869, 8873, 8940, 8908, 9005,
  //         9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125,
  //         8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876,
  //       ],
  //       score: 104,
  //       time: 1175714200,
  //       title: 'My YC app: Dropbox - Throw away your USB drive',
  //       type: 'story',
  //       url: 'http://www.getdropbox.com/u/2/screencast.html',
  //     },
  //   ];
  //   topStoryObj = ss;
  //   // topStoryObj = null;
  // }
  // yield put({type: GET_TOP_STORIES_OK, payload: topStoryObj});
};

export function* getTopStoriesSaga() {
  yield takeLeading(GET_TOP_STORIES, getTopStories);
}

const getTopStoriesInfo = function* async({payload}) {
  const fromRefresh = payload && payload.isRefreshing;
  const fromFetchMore = payload && payload.fromFetchMore;
  const state = yield select();
  const {topStories, topStoriesInfo} = state.mainViewReducer;

  const currentIndex = fromRefresh
    ? 0
    : topStoriesInfo && topStoriesInfo.next
    ? topStoriesInfo.next
    : 0;

  if (topStoriesInfo && topStoriesInfo.max) {
    if (currentIndex > topStoriesInfo.max) {
      return;
    }
  }

  let topStoriesInfoObj = [];

  yield Promise.all(
    topStories[currentIndex].map(async storyItem => {
      const itemDetails = await getItemDetails(storyItem);
      topStoriesInfoObj.push(itemDetails);
    }),
  );

  let newTopStoriesInfoObj = topStoriesInfo.data.concat(topStoriesInfoObj);
  let current = currentIndex;
  if (!fromFetchMore) {
    current = 0;
    newTopStoriesInfoObj = topStoriesInfoObj;
  }

  yield put({
    type: GET_TOP_STORIES_INFO_OK,
    payload: {
      current: current,
      next: current + 1,
      data: newTopStoriesInfoObj,
      max: topStories.length,
    },
  });
  if (fromRefresh) {
    yield put({
      type: SET_TOP_STORY_REFRESHING_OK,
      payload: false,
    });
  }
};

export function* getTopStoriesDetailsSaga() {
  yield takeLatest(GET_TOP_STORIES_INFO, getTopStoriesInfo);
}

const setTopStoriesRefreshing = function* async({payload}) {
  yield put({
    type: SET_TOP_STORY_REFRESHING_OK,
    payload,
  });
};

export function* setTopStoriesRefreshingSaga() {
  yield takeLatest(SET_TOP_STORY_REFRESHING, setTopStoriesRefreshing);
}
