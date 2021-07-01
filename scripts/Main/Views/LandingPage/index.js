import React from 'react'

import HeaderBar from '../../Components/HeaderBar';
import Footer from '../../Components/Footer';
import Carousel from '../../Components/Carousel';

import './styles.css';

function LandingPage(){
    return(
        <div>
            <div id="landing">
            <HeaderBar/>
            
            <Carousel/>

            </div>
            <Footer/>

        </div>
        
        
    );


}

export default LandingPage;