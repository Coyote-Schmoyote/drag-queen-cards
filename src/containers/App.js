import { render } from '@testing-library/react';
import React from 'react';
import CardList from '../components/CardList';
import {dragQueens} from '../dragQueens';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends React.Component{
    constructor() {
        super()
        this.state = {
            dragQueens: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        this.setState({ dragQueens: dragQueens })     }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() { 
        const filteredQueens = this.state.dragQueens.filter(dragQueens =>{
            return dragQueens.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1>Random List of Some of the <br />RuPaul's Drag Race Queens <br />Wearing Something Blue</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                <CardList dragQueens={filteredQueens}/>
                </Scroll>
            </div>
        );
    }
}

export default App;