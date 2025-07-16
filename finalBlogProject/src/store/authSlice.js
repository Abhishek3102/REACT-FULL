import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      // here since userData name is same so we could only write state.userData = action.payload
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

// whatever is written in reducers, is called actions. so we took login and logout
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
