import React from 'react';
import './accountCard.css';

const AccountCard = () => {
  return (
    <div className="account-card">
      <div className="account-card-header">
        Argent Bank Checking (x3448)


        <div className="account-balance">$48,098.43</div>
        <div className="account-balance-label">Available balance</div>
      </div>
      <div className="account-card-footer">
        <i className="fa fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default AccountCard;
