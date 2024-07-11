import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import { loginSuccess } from '../../store/userSlice';
import './profile.css';
import FormEdit from '../../composants/FormEdit/FormEdit';

function Profile() {

    const dispatch = useDispatch();

    useEffect(() => {
        // Récupération du token et des informations utilisateur depuis localStorage ou sessionStorage
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const userInfo = localStorage.getItem('userInfo') || sessionStorage.getItem('userInfo');

        // Si le token et les informations utilisateur existent, dispatch de l'action loginSuccess
        if (token && userInfo) {
            dispatch(loginSuccess({ token, userInfo: JSON.parse(userInfo) }));
        }
    }, [dispatch]);



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
