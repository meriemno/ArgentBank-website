import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import { loginSuccess } from '../../store/userSlice';
import './profile.css';
import FormEdit from '../../composants/FormEdit/FormEdit';
import AccountCard from '../../composants/account/AccountCard';

function Profile() {

   


    return (
        <>
            <Header />
            <main className="main bg-dark">
                <FormEdit />
                <div className="account-card-container">
                <AccountCard />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Profile;
