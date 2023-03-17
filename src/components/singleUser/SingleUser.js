import React, {Component} from 'react';

class SingleUser extends Component{
  constructor(props){
    super(props)
    this.state = {
      user: {
        id: '',
        name: '',
        email: '',
        score: 0,
        joined: '',
      }
    }
  };

  componentDidMount = () => {
    fetch('/api/all/${this.props.num}')
      .then(response => response.json())
      .then(user => {
        this.setState({user: {
          id: user.id,
          name: user.name,
          email: user.email,
          score: user.score,
          joined: user.joined
        }})
      })
      .catch(err => console.log("err"));
  }

  render() {
    if (this.state.user.id<=0){
      return <h1> </h1>
    } 
    else {
      return (
        <article className="br3  ba b--white-30 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80 white">
            <img alt="profile" src={`https://robohash.org/${this.state.user.id}?set=set4`} />
              <h1>{this.state.user.name}</h1>
              email: <h2>{this.state.user.email}</h2>
              score: <h1>{this.state.user.score}</h1>
              joined: <p>{this.state.user.joined}</p>
            </main>
        </article>
    );
    }
  }
}

export default SingleUser;