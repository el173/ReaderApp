import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {render, cleanup} from 'react-native-testing-library';

import TopStoriesTab from '../../../../src/screens/MainView/TopStoriesTab';

afterEach(() => {
  cleanup();
});

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
    const noDataScreen = render(
      <Provider store={store}>
        <TopStoriesTab />
      </Provider>,
    ).toJSON();
    expect(noDataScreen).toMatchSnapshot();
  });

  it('renders with data', () => {
    const mainViewReducer = {
      topStoriesInfo: {
        data: [
          {
            by: 'ciprian_craciun',
            descendants: 5,
            id: 31387312,
            kids: [31387601],
            score: 21,
            time: 1652619857,
            title: 'Golang Diaries: Generics',
            type: 'story',
            url: 'https://www.tbray.org/ongoing/When/202x/2022/05/14/Golang-Generics',
          },
        ],
        current: 0,
        max: 1,
        next: 1,
      },
      topStories: [[31386619]],
      isTopStoryRefreshing: false,
    };
    const store = mockStore({
      mainViewReducer,
    });

    const withDataScreen = render(
      <Provider store={store}>
        <TopStoriesTab />
      </Provider>,
    ).toJSON();

    console.log('asdasd', withDataScreen);
    expect(withDataScreen).toMatchSnapshot();
  });
});
