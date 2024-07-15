import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/userSlice.jsx'; // Importation de 'userSlice';
import { loginUser } from '../../api.jsx';
import './form.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);// State pour le 'remember me'
  const [error, setError] = useState(null);
  const dispatch = useDispatch(); // Hook useDispatch pour la mise à jour du store
  const navigate = useNavigate();// Hook useNavigate pour la redirection

  const handleLogin = async (e) => {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut
    try {
      const { token, userInfo } = await loginUser(username, password);
      console.log('Token received:', token); // Log pour vérifier le token
      console.log('User info received:', userInfo); // Log pour vérifier l'utilisateur
      dispatch(loginSuccess({ token, userInfo }));
      // Stockage des informations d'authentification en fonction de la case "Remember me"
      if (rememberMe) {
        localStorage.setItem('token', token); // Stocke le token dans localStorage
        localStorage.setItem('userInfo', JSON.stringify(userInfo)); // Stocke les informations utilisateur dans localStorage
      } else {
        sessionStorage.setItem('token', token); // Stocke le token dans sessionStorage
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo)); // Stocke les informations utilisateur dans sessionStorage
      }
      navigate('/profile'); // Redirection vers la page de profil après une connexion réussie
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1 className="sign-in-title">Sign In</h1>
      <form onSubmit={handleLogin}>
      {error && <p className="error-message">{error}</p>}
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
          <input type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)} />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit">Sign in</button>
        
      </form>
    </div>
  );
};

export default Login;
