import { configureStore } from '@reduxjs/toolkit';
import userSlice  from './userSlice'
import gestSlice from './gestSlice';

export default configureStore({
  reducer: {
    user:userSlice,
    gest:gestSlice,

  },
});
