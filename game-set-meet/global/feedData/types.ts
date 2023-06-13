import { AnyAction } from 'redux';

export const SET_FEED_DATA = 'SET_FEED_DATA';
export const ADD_USERS_TO_FEED = 'ADD_USERS_TO_FEED';

interface SetFeedDataAction extends AnyAction {
  type: typeof SET_FEED_DATA;
  payload: UserData[];
}

interface AddUsersToFeedAction extends AnyAction {
  type: typeof ADD_USERS_TO_FEED;
  payload: UserData[];
}

export type FeedDataActionTypes = SetFeedDataAction | AddUsersToFeedAction;