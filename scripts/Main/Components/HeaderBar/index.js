import React from 'react'

import './styles.css';

function HeaderBar(){
    return(
        <div id="header-bar">
            <div id="bar-1">
                <div id="social-media">
                    <span>Compartilhe nas redes sociais:</span>

                    <a href="https://www.facebook.com/">
                        <img src="./Assets/facebook.svg"/>
                    </a>

                    <a href="https://www.twitter.com/">
                        <img src="./Assets/twitter.svg"/>
                    </a>

                    <a href="/404">
                        <img src="./Assets/plus.svg"/>
                    </a>
                </div>

                <div id="language">
                <button className="language-button active">
                        <img src="./Assets/brazil.svg"/>
                </button>

                <button className="language-button">
                        <img src="./Assets/USA.svg"/>
                </button>
                </div>                
            </div>
            <div id="bar-2">
                <div id="logo">
                    <img id="logo-img" src="./Assets/logo.png"/>
                    <span id="logo-details"/>
                    <img id="logo-bg" src="./Assets/logo-bg.svg"/>
                </div>
                
                <a href="#/404">Quem somos</a>
                <a id="hover-effect" >Soluções <br/> <img src="./Assets/arrow.svg"/></a>
                <div id="hover-menu">
                    <a href="#/404">Consultoria</a>
                    <a href="#/404">Representação</a>
                    <a href="#/404">Projetos especiais</a>
                </div>
                <a href="#/404">Clientes e Parceiros</a>
                <a href="#/404">Notícias</a>
                <a href="#/404">Contato</a>
            </div>
        </div>
    )
}

export default HeaderBar;