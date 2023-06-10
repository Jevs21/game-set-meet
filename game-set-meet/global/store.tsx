import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from './userData/reducer';

const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
