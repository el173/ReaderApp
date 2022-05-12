const HACKER_NEWS_BASE_URL = 'https://hacker-news.firebaseio.com/v0';

const HACKER_NEWS_TOP_STORIES = 'HACKER_NEWS_TOP_STORIES';
const HACKER_NEWS_DETAILS = 'HACKER_NEWS_DETAILS';

export {HACKER_NEWS_TOP_STORIES, HACKER_NEWS_DETAILS};

// dynamic path or query params should add as place holders to URL eg: <param1>, <param2>
export const API_LIST = [
  {
    apiName: HACKER_NEWS_TOP_STORIES,
    endpoint: `${HACKER_NEWS_BASE_URL}/topstories.json`,
    hasParams: false,
  },
  {
    apiName: HACKER_NEWS_DETAILS,
    endpoint: `${HACKER_NEWS_BASE_URL}/item/<param1>.json`,
    hasParams: true,
  },
];
