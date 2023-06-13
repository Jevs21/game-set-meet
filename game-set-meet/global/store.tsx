import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from './userData/reducer';
import feedDataReducer from './feedData/reducer';

const store = configureStore({
  reducer: {
    userData: userDataReducer,
    feedData: feedDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
