import {GET_ITEM_DETAILS_OK} from '../actionTypes';

const INITIAL_STATE = {
  itemDetails: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ITEM_DETAILS_OK:
      return {...state, itemDetails: action.payload};
    default:
      return state;
  }
};
