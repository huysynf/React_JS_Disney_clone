import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlide'
import movieReducer from '../features/movies/movieSlide';

export default configureStore({
  reducer:{
    user: userReducer,
    movie: movieReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

