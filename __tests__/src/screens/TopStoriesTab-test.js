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

import {HACKER_NEWS_TOP_STORIES, HACKER_NEWS_DETAILS} from '../../../src/api';
import {GET_TOP_STORIES} from '../../../src/actionTypes';

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
          by: 'helsinkiandrew',
          descendants: 35,
          id: 31375352,
          kids: [
            31375602, 31375501, 31375634, 31375447, 31375644, 31375388,
            31375470, 31375505, 31375562, 31375527, 31375573, 31375629,
          ],
          score: 25,
          time: 1652506567,
          title: 'Is It Safe to Ship Thousands of Electric Cars on Big Ships?',
          type: 'story',
          url: 'https://www.autoweek.com/news/industry-news/a39951439/is-it-safe-to-ship-thousands-of-electric-cars-on-big-ships/',
        },
        {
          by: 'KerrickStaley',
          descendants: 20,
          id: 31374364,
          kids: [
            31375110, 31375017, 31375731, 31374965, 31374844, 31374677,
            31375042, 31375351, 31374971, 31374629, 31374681, 31374793,
            31374850,
          ],
          score: 128,
          time: 1652492809,
          title: 'Cursor Dance Party',
          type: 'story',
          url: 'https://www.cursordanceparty.com/',
        },
        {
          by: 'memorable',
          descendants: 9,
          id: 31374855,
          kids: [
            31375728, 31375576, 31375393, 31375443, 31375221, 31375306,
            31375015, 31374999,
          ],
          score: 63,
          time: 1652499098,
          title: 'Making fifty TIC-80 carts in a weekend',
          type: 'story',
          url: 'https://blinry.org/50-tic80-carts/',
        },
        {
          by: 'dsr12',
          descendants: 6,
          id: 31375169,
          kids: [31375537, 31375584, 31375640, 31375654, 31375625],
          score: 47,
          time: 1652503696,
          title: 'Curl Funds, server hosting and more',
          type: 'story',
          url: 'https://curl.se/mail/lib-2022-05/0017.html',
        },
      ],
    });

    const data = await makeApiCall(getAPI(HACKER_NEWS_DETAILS));
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

// axios.mockImplementation(config => {
//   switch (config.url) {
//     case getAPI(HACKER_NEWS_TOP_STORIES):
//       return Promise.resolve({
//         data: [31375352, 31374364, 31374855, 31375169],
//       });
//     case HACKER_NEWS_DETAILS:
//     default:
//       return Promise.resolve({
//         data: [
//           {
//             by: 'helsinkiandrew',
//             descendants: 35,
//             id: 31375352,
//             kids: [
//               31375602, 31375501, 31375634, 31375447, 31375644, 31375388,
//               31375470, 31375505, 31375562, 31375527, 31375573, 31375629,
//             ],
//             score: 25,
//             time: 1652506567,
//             title:
//               'Is It Safe to Ship Thousands of Electric Cars on Big Ships?',
//             type: 'story',
//             url: 'https://www.autoweek.com/news/industry-news/a39951439/is-it-safe-to-ship-thousands-of-electric-cars-on-big-ships/',
//           },
//           {
//             by: 'KerrickStaley',
//             descendants: 20,
//             id: 31374364,
//             kids: [
//               31375110, 31375017, 31375731, 31374965, 31374844, 31374677,
//               31375042, 31375351, 31374971, 31374629, 31374681, 31374793,
//               31374850,
//             ],
//             score: 128,
//             time: 1652492809,
//             title: 'Cursor Dance Party',
//             type: 'story',
//             url: 'https://www.cursordanceparty.com/',
//           },
//           {
//             by: 'memorable',
//             descendants: 9,
//             id: 31374855,
//             kids: [
//               31375728, 31375576, 31375393, 31375443, 31375221, 31375306,
//               31375015, 31374999,
//             ],
//             score: 63,
//             time: 1652499098,
//             title: 'Making fifty TIC-80 carts in a weekend',
//             type: 'story',
//             url: 'https://blinry.org/50-tic80-carts/',
//           },
//           {
//             by: 'dsr12',
//             descendants: 6,
//             id: 31375169,
//             kids: [31375537, 31375584, 31375640, 31375654, 31375625],
//             score: 47,
//             time: 1652503696,
//             title: 'Curl Funds, server hosting and more',
//             type: 'story',
//             url: 'https://curl.se/mail/lib-2022-05/0017.html',
//           },
//         ],
//       });
//   }
// });

// axios.mockResolvedValue({
//   data: [31375352, 31374364, 31374855, 31375169],
// });

// axios.mockResolvedValue({
//   data: [
//     {
//       by: 'helsinkiandrew',
//       descendants: 35,
//       id: 31375352,
//       kids: [
//         31375602, 31375501, 31375634, 31375447, 31375644, 31375388,
//         31375470, 31375505, 31375562, 31375527, 31375573, 31375629,
//       ],
//       score: 25,
//       time: 1652506567,
//       title: 'Is It Safe to Ship Thousands of Electric Cars on Big Ships?',
//       type: 'story',
//       url: 'https://www.autoweek.com/news/industry-news/a39951439/is-it-safe-to-ship-thousands-of-electric-cars-on-big-ships/',
//     },
//     {
//       by: 'KerrickStaley',
//       descendants: 20,
//       id: 31374364,
//       kids: [
//         31375110, 31375017, 31375731, 31374965, 31374844, 31374677,
//         31375042, 31375351, 31374971, 31374629, 31374681, 31374793,
//         31374850,
//       ],
//       score: 128,
//       time: 1652492809,
//       title: 'Cursor Dance Party',
//       type: 'story',
//       url: 'https://www.cursordanceparty.com/',
//     },
//     {
//       by: 'memorable',
//       descendants: 9,
//       id: 31374855,
//       kids: [
//         31375728, 31375576, 31375393, 31375443, 31375221, 31375306,
//         31375015, 31374999,
//       ],
//       score: 63,
//       time: 1652499098,
//       title: 'Making fifty TIC-80 carts in a weekend',
//       type: 'story',
//       url: 'https://blinry.org/50-tic80-carts/',
//     },
//     {
//       by: 'dsr12',
//       descendants: 6,
//       id: 31375169,
//       kids: [31375537, 31375584, 31375640, 31375654, 31375625],
//       score: 47,
//       time: 1652503696,
//       title: 'Curl Funds, server hosting and more',
//       type: 'story',
//       url: 'https://curl.se/mail/lib-2022-05/0017.html',
//     },
//   ],
// });
