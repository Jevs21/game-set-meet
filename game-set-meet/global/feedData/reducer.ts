import { ADD_USERS_TO_FEED, FeedDataActionTypes, SET_FEED_DATA } from './types';
import { AnyAction } from 'redux';

interface FeedDataState {
  feedData: UserData[] | null;
}

const initialState: FeedDataState = {
  feedData: null,
  // initialize any other feed data fields...
};

const isFeedDataAction = (action: AnyAction): action is FeedDataActionTypes => action.type === SET_FEED_DATA;

const feedDataReducer = (state = initialState, action: AnyAction): FeedDataState => {
  if (isFeedDataAction(action)) {
    switch(action.type) {
      case SET_FEED_DATA:
        return {
          ...state,
          feedData: action.payload,
          // update any other feed data fields...
        };
      case ADD_USERS_TO_FEED:
        return {
          ...state,
          feedData: state.feedData ? [...state.feedData, ...action.payload] : action.payload,
          // update any other feed data fields...
        };
    }
  }
  return state;
};

export default feedDataReducer;
