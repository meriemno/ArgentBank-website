import React from 'react'
import Header from '../../layouts/header/Header'
import Footer from '../../layouts/footer/Footer'
import Form from '../../composants/forms/Form'
import './signIn.css'


function SignIn() {
    return (
        <>
            <Header />
            <main className="main bg-dark">
                <Form />
            </main>
            <Footer />
        </>
    )
}

export default SignIn