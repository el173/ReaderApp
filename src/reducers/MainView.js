import {GET_TOP_STORIES_OK} from '../actionTypes/MainView';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TOP_STORIES_OK:
      return {...state, topStories: action.payload};
    default:
      return state;
  }
};
