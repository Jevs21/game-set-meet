import { SET_USER_DATA, UserDataActionTypes } from './types';

export const setUserData = (data: LoggedUserData): UserDataActionTypes => {
  return {
    type: SET_USER_DATA,
    payload: data
  };
};
