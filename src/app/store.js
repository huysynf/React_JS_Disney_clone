import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import userReducer from './reducers/users/userSlide';

export default configureStore({
  reducer:{
    user: userReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

