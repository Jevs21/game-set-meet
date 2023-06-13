import { SET_FEED_DATA, FeedDataActionTypes } from './types';

export const setFeedData = (data: FeedData): FeedDataActionTypes => {
  return {
    type: SET_FEED_DATA,
    payload: data
  };
};
