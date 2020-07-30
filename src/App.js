import React,{ Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield : ''
        }
    }
    onSearchChange = (event) =>{
        this.setState({ searchfield : event.target.value })
    }

    componentDidMount() {
        this.setState({
            robots : robots
        })
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        }
            )
    return (
        <div className='tc'>
            <h1>ROBOFRIENDS</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            < CardList robots={ filteredRobots } />
        </div>
    );
    }
}
export default App;