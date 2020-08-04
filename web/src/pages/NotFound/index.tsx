import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/landing.svg'

import './styles.css';

const NotFound = () => {
    return(
        <main id="nf-container">
            <h1>Ops! Página não encontrada</h1>
            <img src={logo} alt="Logo"/>
            <Link to="/" id="back">
                <p>Conheça os Proffys ou se torne um!</p>      
            </Link>
        </main>
    )
}

export default NotFound;