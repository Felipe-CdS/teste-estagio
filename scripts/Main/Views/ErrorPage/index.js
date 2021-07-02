import React from 'react'

import HeaderBar from '../../Components/HeaderBar';
import Footer from '../../Components/Footer';

import './styles.css'

function ErrorPage(){
    return(
        <div id="error-page">
            <HeaderBar/>

            <h1>Essa página ainda não está pronta.</h1>
            <a id="home-link" href="#">Voltar a Home</a>
            
            <Footer/>
        </div>
    );
}

export default ErrorPage;