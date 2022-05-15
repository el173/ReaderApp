import 'react-native';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

import {
  getTopStoriesSaga,
  getTopStoriesDetailsSaga,
} from '../../../src/actions/MainView';

import {
  GET_TOP_STORIES_INFO,
  GET_TOP_STORIES_INFO_OK,
  GET_TOP_STORIES,
  GET_TOP_STORIES_OK,
} from '../../../src/actionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Main View Actions', () => {
  const topStoryResponse = [31386330, 31386619, 31385627, 31386091];
  it('getTopStoriesSaga', async done => {
    const store = mockStore({});
    sagaMiddleware.run(getTopStoriesSaga);

    axios.mockResolvedValue({
      data: topStoryResponse,
    });

    const expectedActions = [
      {type: GET_TOP_STORIES},
      {type: GET_TOP_STORIES_OK, payload: [topStoryResponse]},
    ];

    store.subscribe(() => {
      const actions = store.getActions();
      if (actions.length >= expectedActions.length) {
        expect(actions).toEqual(expectedActions);
        done();
      }
    });

    store.dispatch({type: GET_TOP_STORIES});
  });
  it('getTopStoriesDetailsSaga', async done => {
    const mainViewReducer = {
      topStoriesInfo: {
        data: [],
        current: 0,
      },
      topStories: [[31386619]],
    };
    const store = mockStore({
      mainViewReducer,
    });
    sagaMiddleware.run(getTopStoriesDetailsSaga);

    const response = {
      by: 'baak6',
      descendants: 6,
      id: 31386619,
      kids: [31387029, 31386760, 31386954],
      score: 24,
      time: 1652610396,
      title:
        'Own Your Calendar and Contacts with OpenBSD, Baïkal, and FOSS Android',
      type: 'story',
      url: 'https://baak6.com/baikal-openbsd-fossdroid/',
    };

    axios.mockResolvedValue({
      data: response,
    });

    const expectedActions = [
      {type: GET_TOP_STORIES_INFO},
      {
        type: GET_TOP_STORIES_INFO_OK,
        payload: {current: 0, next: 1, data: [response], max: 1},
      },
    ];

    store.subscribe(() => {
      const actions = store.getActions();
      if (actions.length >= expectedActions.length) {
        expect(actions).toEqual(expectedActions);
        done();
      }
    });

    store.dispatch({type: GET_TOP_STORIES_INFO});
  });
});
