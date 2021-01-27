import { render } from '@testing-library/react';
import React from 'react';
import ColorPicker from '../ColorPicker.js';
import './App.css';
import Card from '../Card.js';

class App extends React.Component{
    constructor() {
        super()

    };

    render() { 
      
        return(
            <div className='tc'>
                <h3 style={{color:"gainsboro"}}>A Random <br/> RuPaul's Drag Race Queen <br />Wearing Something</h3>
                <h1 style ={{color:"black"}} id="color" class="dim white pointer">Black and White</h1>
                <ColorPicker/>
                <Card/>
            </div>
        );
    };
};


export default App;