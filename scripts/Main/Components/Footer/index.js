import React from 'react'

import './styles.css';

function Footer(){

    return(
        <div id="footer">

            <div id="left-space">
                <div id="adress">
                    <img src="./Assets/location.svg"/>
                    <span>Rua Itaperuna nº 200 | Santa Rosa, Niterói, Rio de Janeiro, Brasil <br/> 
                    CEP: 24020-070 | Tel.: (21)2621-7788 / (21)2613-3700</span>
                </div>
                <div id="email">
                    <img src="./Assets/email.svg"/>
                    <span>contato@petrosol.adv.br</span>
                </div>
            </div>

            <img id="logo-footer" src="./Assets/logo2.png"/>
        </div>
    );
}

export default Footer