import React from 'react';


const ColorPicker = () => {
    return (
        <div className = 'container'>
            <nav className='pa4 lh-copy'>
                <div className="bg-animate bg-light-red hover-bg-dark-red dib br-100 w3 h3 ma2 pa3 grow shadow-5"></div>
                <div className="bg-animate bg-light-blue hover-bg-blue dib br-100 w3 h3 ma2 pa3 grow shadow-5"></div>
                <div className="bg-animate bg-light-yellow hover-bg-gold dib br-100 w3 h3 ma2 pa3 grow shadow-5"></div>
                <div className="bg-animate bg-light-purple hover-bg-purple dib br-100 w3 h3 ma2 pa3 grow shadow-5"></div>
                <div className="bg-animate bg-pink hover-bg-dark-pink dib br-100 w3 h3 ma2 pa3 grow shadow-5"></div>
                <div className="bg-animate bg-green hover-bg-dark-green dib br-100 w3 h3 ma2 pa3 grow shadow-5"></div>
            </nav>
        </div>
    );
};

export default ColorPicker;