import React from 'react'

import './styles.css'

class Carousel extends React.Component{

    state = {
        positionIndex: 1        
    }

    selectButton(){
        var element = document.getElementById("carousel-buttons").getElementsByClassName("active")[0];
        element.classList.remove("active");
        this.classList.add("active");
    }

    componentDidMount(){    
        (document.getElementById("carousel-buttons").childNodes)
             .forEach(element => { element.addEventListener("click", this.selectButton) });
    }

    render(){
        return(
            <div id="carousel">
                <div id="carousel-img">
                    <div id="bg-gradient"></div>
                    <div id="bg-img" style={{backgroundImage: `url(./Assets/Images/bg_photo${this.state.positionIndex}.png)`}}></div>
                    <div id="carousel-text-div">
                        <h1>Consultoria e Representações na industria de <span>Óleo e gás!</span></h1>
                        <hr />
                        <button><img src="./Assets/arrow.svg"/></button>
                    </div>
                    <div id="bg-curve"></div>
                </div>
                
                <div id="carousel-buttons">
                    <button className="carousel-button active" id="button-1" onClick={() => this.setState({ positionIndex: 1 })}>1</button>
                    <button className="carousel-button" id="button-2" onClick={() => this.setState({ positionIndex: 2 })}>2</button>
                    <button className="carousel-button" id="button-3" onClick={() => this.setState({ positionIndex: 3 })}>3</button>
                    <button className="carousel-button" id="button-4" onClick={() => this.setState({ positionIndex: 4 })}>4</button>
                    <button className="carousel-button" id="button-5" onClick={() => this.setState({ positionIndex: 1 })}>5</button>
                </div>
            </div>
        );
    }
}


export default Carousel;