import React from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "./ErrorBoundry";


class App extends React.Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => 
             response.json()
        )
        .then(users => this.setState({robots:users}))
    }
    
    onsearchchanges = (event) => {
        this.setState({searchfield:event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return ( 
            <div className="tc">
                <h2>RoboFriends</h2>
                <SearchBox searchchanges = {this.onsearchchanges} />
                <Scroll>
                <ErrorBoundry>
                <CardList robots = {filteredRobots} />
                </ErrorBoundry>
                </Scroll>
            </div>
         );
    }
}

 
export default App;