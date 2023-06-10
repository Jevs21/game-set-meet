import { UserDataActionTypes, SET_USER_DATA } from './types';
import { AnyAction } from 'redux';

interface UserDataState {
  userData: UserData | null;
}

const initialState: UserDataState = {
  userData: null,
  // initialize any other user data fields...
};

const isUserDataAction = (action: AnyAction): action is UserDataActionTypes => action.type === SET_USER_DATA;

const userDataReducer = (state = initialState, action: AnyAction): UserDataState => {
  if (isUserDataAction(action)) {
    switch(action.type) {
      case SET_USER_DATA:
        return {
          ...state,
          userData: action.payload,
          // update any other user data fields...
        };
    }
  }
  return state;
};

export default userDataReducer;
