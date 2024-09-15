import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    name: null,
    email: null,
    profileImage: null,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.profileImage = action.payload.profileImage;
    },
    clearUserDetails: (state) => {
      state.user = null;
      state.name = null;
      state.email = null;
      state.profileImage = null;
    },
  },
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;
export default userSlice.reducer;
