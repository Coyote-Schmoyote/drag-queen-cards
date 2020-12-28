import React from 'react';
import '../index.css';

const colorRed = (event, colors) => {
    document.body.style.background = '#bf857c';
};

const colorGreen = (event, colors) => {
    document.body.style.background = '#7ea38d';
};

const colorYellow = (event, colors) => {
    document.body.style.background = '#dbd78a';
};

const colorBlue = (event, colors) => {
    document.body.style.background = '#8fabbf';
};

const colorPurple = (event, colors) => {
    document.body.style.background = '#ac94b0';
};

const colorPink = (event, colors) => {
    document.body.style.background = '#cc8fb7';
};


const ColorPicker = (color) => 
        {
        return (
            <div className = 'container'>
                <nav className='pa4 lh-copy'>
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
