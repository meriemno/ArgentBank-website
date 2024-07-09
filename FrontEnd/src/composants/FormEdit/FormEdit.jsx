// src/pages/Profile.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../store/userSlice';
import './formEdit.css';

function FormEdit() {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const [newUsername, setNewUsername] = useState(userInfo ? userInfo.userName : '');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewUsername(userInfo.userName); // réinitialisation ldu nom d'utilisateur 
  };

  const handleSaveClick = () => {
    // appel API pour mettre à jour le nom d'utilisateur
    dispatch(updateUser({ userName: newUsername }));
    setIsEditing(false);
  };

  return (
    <>
      
      
        <h1>Welcome back <br></br>{userInfo?.firstName } {userInfo?.lastName} !</h1>
        {isEditing ? (
          <div className="edit-form">
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
              />
              </div>
            </div>
            <button className="edit-button" onClick={handleSaveClick}>Save</button>
            <button className="edit-button" onClick={handleCancelClick}>Cancel</button>
          </div>
        ) : (
          <div>
            <button className="edit-button" onClick={handleEditClick}>Edit Username</button>
          </div>
        )}
     
      
    </>
  );
}

export default FormEdit;
