import { AnyAction } from 'redux';

export const SET_USER_DATA = 'SET_USER_DATA';

interface SetUserDataAction extends AnyAction {
  type: typeof SET_USER_DATA;
  payload: LoggedUserData;
}

export type UserDataActionTypes = SetUserDataAction;
