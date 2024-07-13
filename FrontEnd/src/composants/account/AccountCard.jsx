import React from 'react';
import './accountCard.css';
import PropTypes from 'prop-types';

const AccountCard = ({title,amount,text}) => {
  return (
    <div className="account-card">
      <div className="account-card-header">
        {title}


        <div className="account-balance">${amount}</div>
        <div className="account-balance-label">{text}</div>
      </div>
      <div className="account-card-footer">
        <button className="transaction-button">View transactions</button>
      </div>
    </div>
  );
};

AccountCard.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
export default AccountCard;
