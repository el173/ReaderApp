/**
 * @format
 */

import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import {Provider} from 'react-redux';

import {makeApiCall, getAPI} from '../../../src/lib/Utils';

import TopStoriesTab from '../../../src/screens/MainView/TopStoriesTab';

import {HACKER_NEWS_TOP_STORIES} from '../../../src/api';

describe('Main View', () => {
  const mockStore = configureStore([]);

  it('renders correctly', async () => {
    async () => {
      renderer.create(<TopStoriesTab />);
    };
  });

  it('renders no with data', () => {
    const mainViewReducer = {
      topStories: [],
    };
    const store = mockStore({mainViewReducer});
    const noDataScreen = renderer
      .create(
        <Provider store={store}>
          <TopStoriesTab />
        </Provider>,
      )
      .toJSON();
    expect(noDataScreen).toMatchSnapshot();
  });

  it('renders with data', async () => {
    axios.mockResolvedValue({
      data: [
        {
          by: 'dhouston',
          descendants: 71,
          id: 8863,
          kids: [
            9224, 8917, 8952, 8958, 8884, 8887, 8869, 8873, 8940, 8908, 9005,
            9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125,
            8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876,
          ],
          score: 104,
          time: 1175714200,
          title: 'My YC app: Dropbox - Throw away your USB drive',
          type: 'story',
          url: 'http://www.getdropbox.com/u/2/screencast.html',
        },
      ],
    });
    const data = await makeApiCall(getAPI(HACKER_NEWS_TOP_STORIES));
    const mainViewReducer = {
      topStories: data.data,
    };
    const store = mockStore({mainViewReducer});
    const withDataScreen = renderer
      .create(
        <Provider store={store}>
          <TopStoriesTab />
        </Provider>,
      )
      .toJSON();
    expect(withDataScreen).toMatchSnapshot();
  });
});
