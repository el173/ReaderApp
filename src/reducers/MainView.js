import {
  GET_TOP_STORIES_OK,
  GET_TOP_STORIES_INFO_OK,
  SET_TOP_STORY_REFRESHING_OK,
} from '../actionTypes';

const INITIAL_STATE = {
  topStories: [],
  topStoriesInfo: {
    data: [],
  },
  isTopStoryRefreshing: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TOP_STORIES_OK:
      return {...state, topStories: action.payload};
    case GET_TOP_STORIES_INFO_OK:
      return {...state, topStoriesInfo: action.payload};
    case SET_TOP_STORY_REFRESHING_OK:
      return {...state, isTopStoryRefreshing: action.payload};
    default:
      return state;
  }
};
