import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  photo: '',
}

const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) =>{
      state.name = action.payload.name
      state.email = action.payload.email
      state.photo = action.payload.photo
    },

    setSignOutState: state => {
      state.email = ''
      state.name = ''
      state.photo = ''
    }
  }
});

export const {setUserLoginDetails, setSignOutState} = userSlide.actions;

export const selectUserName = state => state?.user?.name;
export const selectUserEmail = state => state?.user?.email;
export const selectUserPhoto = state => state?.user?.photo;
export default userSlide.reducer;