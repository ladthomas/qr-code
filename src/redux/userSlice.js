import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { name: '', firstName: '' },
  reducers: {
    setUserInfo: (state, action) => {
      state.name = action.payload.name;
      state.firstName = action.payload.firstName;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
