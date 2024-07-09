import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/userSlice.jsx'; // Importation de 'userSlice';
import { loginUser } from '../../api.jsx';
import './form.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();// Hook useNavigate pour la redirection
  const handleLogin = async (e) => {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut
    try {
      const { token, userInfo } = await loginUser(username, password);
      console.log('Token received:', token); // Log pour vérifier le token
      console.log('User info received:', userInfo); // Log pour vérifier l'utilisateur
      dispatch(loginSuccess({ token, userInfo }));
      navigate('/Profile'); // Redirection vers la page de profil après une connexion réussie
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit">Se connecter</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
