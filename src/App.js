import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import All from './components/Allusers/All';
import Quiz from './components/Quiz/QuizMain';
import SingleUser from './components/singleUser/SingleUser'
import './App.css';
import 'tachyons';
import ApiDocs from './components/ApiDocs';

const initialState = {
  input: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  singleUserId: '',
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route=== 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  onQuizFinish = (score) => {
    this.setState(Object.assign(this.state.user, { entries: score}))
  }
  onSingleUser = (num) => {
    this.setState({singleUserId: num})
  }

  render() {
    const {isSignedIn, route} = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} route={route}/>
        
        {route === 'api' ? <ApiDocs /> : route === 'main'
        ? <All route={route} onRouteChange={this.onRouteChange} onSingleUser={this.onSingleUser}/> : route === 'playQuiz'
        ? <Quiz id={this.state.user.id} entries={this.state.user.entries} onQuizFinish={this.onQuizFinish} onRouteChange={this.onRouteChange} /> : route === 'singleUser'
        ? <SingleUser onRouteChange={this.onRouteChange} num={this.state.singleUserId}/> : route === 'home'
          ? <div>
              <Profile id={this.state.user.id} name={this.state.user.name} entries={this.state.user.entries}/>
            </div>
          : (
            route === 'signin'
            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
} 

export default App;