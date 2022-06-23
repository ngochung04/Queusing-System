import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

// ...
const store = configureStore({
  reducer: {
    user: userSlice,
  },
  // composeWithDevTools() ,
})
export type RootState = ReturnType<typeof store.getState>

export default store




 