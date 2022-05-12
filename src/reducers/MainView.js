import {GET_TOP_STORIES_OK} from '../actionTypes';

const INITIAL_STATE = {
  topStories: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TOP_STORIES_OK:
      return {...state, topStories: action.payload};
    default:
      return state;
  }
};
