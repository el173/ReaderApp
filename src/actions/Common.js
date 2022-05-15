import {HACKER_NEWS_DETAILS} from '../api';
import {makeApiCall, getAPI} from '../lib/Utils';

export const getItemDetails = async storyItem => {
  const itemDetailsURL = getAPI(HACKER_NEWS_DETAILS, {'<param1>': storyItem});
  const itemDetailsResponse = await makeApiCall(itemDetailsURL);
  if (itemDetailsResponse && itemDetailsResponse.success) {
    return itemDetailsResponse.data;
  }
  return null;
};
