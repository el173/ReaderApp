import 'react-native';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

import {getItemDetailsSaga} from '../../../src/actions/DetailView';

import {GET_ITEM_DETAILS, GET_ITEM_DETAILS_OK} from '../../../src/actionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Detail View Actions', () => {
  it('getItemDetailsSaga', async done => {
    const store = mockStore({});
    sagaMiddleware.run(getItemDetailsSaga);

    const kids = [31387080];

    const response = {
      by: 'rglullis',
      id: 31387080,
      parent: 31386619,
      text: 'Or use DecSync [0] and eliminate the need for any central server.<p>[0]: <a href="https:&#x2F;&#x2F;github.com&#x2F;39aldo39&#x2F;DecSync" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;39aldo39&#x2F;DecSync</a>',
      time: 1652616587,
      type: 'comment',
    };

    axios.mockResolvedValue({
      data: response,
    });

    const expectedActions = [
      {type: GET_ITEM_DETAILS, payload: [31387080]},
      {type: GET_ITEM_DETAILS_OK, payload: [response]},
    ];

    store.subscribe(() => {
      const actions = store.getActions();
      if (actions.length >= expectedActions.length) {
        expect(actions).toEqual(expectedActions);
        done();
      }
    });

    store.dispatch({type: GET_ITEM_DETAILS, payload: kids});
  });
});
