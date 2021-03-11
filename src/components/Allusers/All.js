import React, { Component }  from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import ErrorBoundry from './ErrorBoundry';
import './All.css';

class All extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      seachField: '',
      id: ''
    }
  }

  componentDidMount() {
    fetch('https://peaceful-retreat-54716.herokuapp.com/all')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({seachField: event.target.value.toLowerCase()});
    }

  render() {
    const newRobots = this.state.robots.filter(robot => {
       return robot.name.toLowerCase().includes(this.state.seachField);
    })
    return (
    <div>
      <div className="tc">
        <img className='mv4'
          alt='robofriends' src={`https://see.fontimg.com/api/renderfont4/7Bpow/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U2VhcmNoaW5n/broadway-regular.png`}/>
        <SearchBox onSearchChange={this.onSearchChange}/>
          <ErrorBoundry>
            <CardList robots={newRobots}/>
          </ErrorBoundry>
      </div>
    </div>
    )
  }
}

export default All;