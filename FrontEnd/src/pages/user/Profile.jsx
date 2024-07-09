import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import './profile.css';
import FormEdit from '../../composants/FormEdit/FormEdit';

function Profile() {
    
    return (
        <>
            <Header />
            <main className="main bg-dark">
               <FormEdit />
            </main>
            <Footer />
        </>
    );
}

export default Profile;
