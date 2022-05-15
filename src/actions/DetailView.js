import {takeLeading, put} from 'redux-saga/effects';

import {getItemDetails} from './Common';

import {GET_ITEM_DETAILS, GET_TOP_STORIES_OK} from '../actionTypes';

const getItemInfo = function* ({payload}) {
  const itemDetailsResponse = getItemDetails(payload);
  const itemDetailsObj =
    itemDetailsResponse && itemDetailsResponse.success
      ? itemDetailsResponse.data
      : null;
  yield put({type: GET_TOP_STORIES_OK, payload: itemDetailsObj});
};

export function* getItemDetailsSaga() {
  yield takeLeading(GET_ITEM_DETAILS, getItemInfo);
}
