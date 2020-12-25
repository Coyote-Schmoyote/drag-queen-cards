import { render } from '@testing-library/react';
import React from 'react';
import CardList from '../components/CardList';
import {dragQueens} from '../dragQueens';
import ColorPicker from '../components/ColorPicker.js';
import './App.css';
import Scroll from '../components/Scroll';


const initialState = {
    color: "",
};

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            bgColor: ""
        }
    };

    render() { 
        const color = [
            'red',
            'blue',
            'yellow',
            'purple',
            'pink',
            'green',
            'bw'];


        return(
            <div className='tc'>
                <h1>Random List of <br/> RuPaul's Drag Race Queens <br />Wearing Something</h1>
                <ColorPicker/>
                <Scroll>
                <CardList dragQueens= { dragQueens }/>
                </Scroll>
            </div>
        );
    };
};


export default App;