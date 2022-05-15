import {takeLeading, put} from 'redux-saga/effects';

import {getItemDetails} from './Common';

import {
  GET_ITEM_DETAILS,
  GET_ITEM_DETAILS_OK,
  CLEAR_ITEM_DETAILS,
  CLEAR_ITEM_DETAILS_OK,
} from '../actionTypes';

const getItemInfo = function* ({payload}) {
  let commentsList = [];
  yield Promise.all(
    payload.map(async storyItem => {
      const itemDetails = await getItemDetails(storyItem);
      commentsList.push(itemDetails);
    }),
  );
  yield put({type: GET_ITEM_DETAILS_OK, payload: commentsList});
};

export function* getItemDetailsSaga() {
  yield takeLeading(GET_ITEM_DETAILS, getItemInfo);
}

const clearItemDetails = function* ({payload}) {
  yield put({type: CLEAR_ITEM_DETAILS_OK, payload: []});
};

export function* clearItemDetailsSaga() {
  yield takeLeading(CLEAR_ITEM_DETAILS, clearItemDetails);
}
