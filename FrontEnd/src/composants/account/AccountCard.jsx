import React from 'react';
import './accountCard.css';

const AccountCard = ({title,amount,text}) => {
  return (
    <div className="account-card">
      <div className="account-card-header">
        {title}


        <div className="account-balance">{amount}</div>
        <div className="account-balance-label">{text}</div>
      </div>
      <div className="account-card-footer">
        <button className="transaction-button">View transactions</button>
      </div>
    </div>
  );
};

export default AccountCard;
