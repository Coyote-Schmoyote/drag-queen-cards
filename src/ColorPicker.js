import React from 'react';
import red from "./db/red/adore.jpg";


//colors

const colorRed = () => {
    document.body.style.background = 'linear-gradient(54deg, rgba(103,39,39,1) 30%, rgba(189,122,122,1) 69%)';
    let red = document.getElementById("color");
    red.innerHTML = "RED";
    red.style.color="firebrick";
};
const colorGreen = () => {
    document.body.style.background = 'linear-gradient(54deg, rgba(39,103,54,1) 30%, rgba(122,189,130,1) 69%)';
    let green = document.getElementById("color");
    green.innerHTML = "GREEN";
    green.style.color = "seagreen";
};
const colorYellow = () => {
    document.body.style.background = 'linear-gradient(54deg, rgba(103,95,39,1) 30%, rgba(189,188,122,1) 69%)';
    let yellow = document.getElementById("color");
    yellow.innerHTML = "YELLOW";
    yellow.style.color = "khaki";
};
const colorBlue = () => {
    document.body.style.background = 'linear-gradient(54deg, rgba(39,44,103,1) 30%, rgba(122,157,189,1) 69%)';
    let blue = document.getElementById("color");
    blue.innerHTML = "BLUE";
    blue.style.color = "royalblue";
};
const colorPurple = () => {
    document.body.style.background = 'linear-gradient(54deg, rgba(92,39,103,1) 30%, rgba(180,122,189,1) 69%)';
    let purple = document.getElementById("color");
    purple.innerHTML = "PURPLE";
    purple.style.color = "darkmagenta"
};
const colorPink = () => {
    document.body.style.background = 'linear-gradient(54deg, rgba(144,56,110,1) 30%, rgba(207,138,183,1) 69%)';
    let pink = document.getElementById("color");
    pink.innerHTML = "PINK";
    pink.style.color = "mediumvioletred"
};

const ColorPicker = () => 
        {
        return (
            <div className = 'container'>
                <nav className='pa2 lh-copy'>
                    <div onClick={colorRed} type="button" className="bg-animate bg-light-red hover-bg-dark-red dib br-100 w3 h3 ma2 pa3 grow shadow-5"></div>
                    <div onClick={colorBlue} type="button" className="bg-animate bg-light-blue hover-bg-blue dib br-100 w3 h3 ma2 pa3 grow shadow-5"></div>
                    <div onClick={colorYellow} type="button" className="bg-animate bg-light-yellow hover-bg-gold dib br-100 w3 h3 ma2 pa3 grow shadow-5"></div>
                    <div onClick={colorPurple} type="button" className="bg-animate bg-light-purple hover-bg-purple dib br-100 w3 h3 ma2 pa3 grow shadow-5"></div>
                    <div onClick={colorPink} type="button" className="bg-animate bg-pink hover-bg-dark-pink dib br-100 w3 h3 ma2 pa3 grow shadow-5"></div>
                    <div onClick={colorGreen} type="button" className="bg-animate bg-green hover-bg-dark-green dib br-100 w3 h3 ma2 pa3 grow shadow-5"></div>
                </nav>
            </div>
        );
    };

export default ColorPicker;
