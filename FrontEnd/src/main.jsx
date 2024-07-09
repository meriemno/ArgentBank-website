import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx';
import SignIn from './pages/signIn/SignIn.jsx';
import { Provider } from 'react-redux';
import store from './store/store.jsx';

import Profile from './pages/user/Profile.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} /> 
        <Route path="/Profile" element={<Profile />} />      
      </Routes>
    </BrowserRouter>
  </Provider>
);