// src/pages/Profile.jsx
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../store/userSlice';
import './formEdit.css';
import { useNavigate } from 'react-router-dom';



function FormEdit() {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [newUsername, setNewUsername] = useState(userInfo ? userInfo.userName : '');
  const [isEditing, setIsEditing] = useState(false);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);


  useEffect(() => {
    if (!isAuthenticated) {
      console.log('User not authenticated');
      navigate('/login');
    }
    else {
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (userInfo) {
      setNewUsername(userInfo.userName);
    }
  }, [userInfo]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewUsername(userInfo.userName); // réinitialisation ldu nom d'utilisateur 
    setError(null);// reinitialisation le message d'erreur dans le formulaire
  };
// verifier que le nom d'utilisateur n'est pas vide et appeler l'action updateUser
  const handleSaveClick = async (e) => {
    e.preventDefault();
    if (newUsername.trim() === '') {
      setError('Username cannot be empty');
      return;
    }
    // appel API pour mettre à jour le nom d'utilisateur
    await dispatch(updateUser({ userName: newUsername }));
    setIsEditing(false);
  };
 
  if (!userInfo) {
    return null;
  }

  return (
    <>


      <h1>Welcome back <br></br>{userInfo?.firstName} {userInfo?.lastName} !</h1>
      {isEditing ? (
        <div className="edit-form" onSubmit={handleSaveClick}>
          <p style={{ color: 'red' }}>{error}</p>
          <div className="input-wrapper">
            <h2 style={{ textAlign: 'center' }}>Edit user info</h2>
            <div className="input-item">
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                id="firstName"
                value={userInfo.firstName}
                disabled
                className="disabled-input input-style"
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="input-item">
              <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                id="lastName"
                value={userInfo.lastName}
                disabled
                className="disabled-input input-style"
              />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="input-item">
              <label htmlFor="userName">Username:</label>
              <input
                className='input-style'
                type="text"
                id="userName"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="edit-button"  onClick={handleSaveClick}>Save</button>
          <button className="edit-button" onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
          <button className="edit-button" type="button" onClick={handleEditClick}>Edit </button>
        </div>
      )}


    </>
  );
}

export default FormEdit;
