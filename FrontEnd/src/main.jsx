import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx';
import SignIn from './pages/signIn/SignIn.jsx';
import { Provider } from 'react-redux';
import store from './store/store.jsx';
import Erreur from './pages/erreur/Erreur.jsx';
import Profile from './pages/user/Profile.jsx';
import { loginSuccess } from './store/userSlice';
import { useDispatch,useEffect } from 'react';




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);