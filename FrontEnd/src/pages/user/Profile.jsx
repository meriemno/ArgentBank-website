import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import { loginSuccess } from '../../store/userSlice';
import './profile.css';
import FormEdit from '../../composants/FormEdit/FormEdit';
import AccountCard from '../../composants/account/AccountCard';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logout } from '../../store/userSlice';

function Profile() {

   

    return (
        <>
            <Header />
            <main className="main bg-dark">
                <FormEdit />
                
                <AccountCard 
                title="Argent Bank Checking (x8349)" amount="$2,082.79" text="Available Balance"/>
                <AccountCard 
                title="Argent Bank Savings (x6712)" amount="$10,928.42" text="Available Balance"/>
                <AccountCard 
                title="Argent Bank Credit Card (x8349)" amount="$184.30" text="Current Balance"/>
               
            </main>
            <Footer />
        </>
    );
}

export default Profile;
