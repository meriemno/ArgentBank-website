
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import './erreur.css';

function Erreur() {
  return (
    <>
    <Header /> 
      
      <main className="main bg-dark">
      <h1 className='title-404'>404 - Page Not Found</h1>
      <p className="p-404">Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go to Home</Link>
      </main>    
    <Footer />
    </>
  );
}

export default Erreur;
