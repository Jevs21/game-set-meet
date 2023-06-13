import { SET_FEED_DATA, FeedDataActionTypes, ADD_USERS_TO_FEED } from './types';

export const setFeedData = (data: UserData[]): FeedDataActionTypes => {
  return {
    type: SET_FEED_DATA,
    payload: data
  };
};

export const addUsersToFeed = (data: UserData[]): FeedDataActionTypes => {
  return {
    type: ADD_USERS_TO_FEED,
    payload: data
  };
}
