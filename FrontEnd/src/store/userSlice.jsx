// src/reducers/userSlice.jsx
import { createSlice } from '@reduxjs/toolkit';
import { updateUsername } from '../api';
import { createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  userInfo: null,
  token: null,
  isAuthenticated: false,
};

//update user
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ userName }, { getState }) => {
    const { user } = getState();
    const updatedUserInfo = await updateUsername(user.token, userName);
    return updatedUserInfo;
  }
);


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log('loginSuccess action received:', action); // Log pour vérifier l'action
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
    
    extraReducers: (builder) => {
      builder.addCase(updateUser.fulfilled, (state, action) => {
        state.userInfo = { ...state.userInfo, userName: action.payload.userName }; // Mettre à jour le username de l'utilisateur
      });
    },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
