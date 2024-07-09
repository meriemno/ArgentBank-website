// src/store/reducers.js

import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  // Vous pouvez ajouter d'autres réducteurs ici
});

export default rootReducer;
