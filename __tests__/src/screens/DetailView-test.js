import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import configureStore from 'redux-mock-store';
import {render, cleanup} from 'react-native-testing-library';
import {Provider} from 'react-redux';

import DetailView from '../../../src/screens/DetailView';

afterEach(() => {
  cleanup();
});
describe('Details View', () => {
  const mockStore = configureStore([]);

  const route = {params: {}};

  it('renders correctly', async () => {
    async () => {
      renderer.create(<DetailView />);
    };
  });

  it('renders no with data', () => {
    const detailsViewReducer = {
      itemDetails: [],
    };
    const store = mockStore({detailsViewReducer});
    const noDataScreen = render(
      <Provider store={store}>
        <DetailView kids={[]} route={route} />
      </Provider>,
    ).toJSON();
    expect(noDataScreen).toMatchSnapshot();
  });

  it('renders with data', () => {
    const detailsViewReducer = {
      itemDetails: [
        {
          by: 'svnpenn',
          id: 31387601,
          kids: [31387632],
          parent: 31387312,
          text: '&gt; func (c *container&gt;[S]) size() int {<p>This is not valid code.',
          time: 1652623124,
          type: 'comment',
        },
      ],
    };
    const store = mockStore({detailsViewReducer});
    const withData = render(
      <Provider store={store}>
        <DetailView kids={[31387601]} route={route} />
      </Provider>,
    ).toJSON();
    expect(withData).toMatchSnapshot();
  });
});
