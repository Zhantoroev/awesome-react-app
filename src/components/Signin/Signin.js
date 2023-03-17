import React from 'react';

class Signin extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      signInEmain: '',
      signInPassword: ''
    }
  };

  onEmailChange = (event) => {
    this.setState({signInEmain: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value});
  }

  onSubmitSign = () => {
    if(!this.state.signInEmain || !this.state.signInPassword) {
      return alert('please, fill all fields')
    }
    fetch('/api/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmain,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
      .then(user => {
        if(user.id){ 
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3  ba b--white-30 mv4 w-100 w-50-m w-25-l mw6 shadow-2 center">
          <main className="pa4 black-80">
              <div className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 white ph0 mh0">Sign In</legend>
                  <div className="mt3">
                      <label className="db fw6 lh-copy f6"  htmlFor="email-address">Email</label>
                      <input className="pa2 b--white input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address" 
                        id="email-address" 
                        onChange = {this.onEmailChange}
                      />
                  </div>
                  <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                      <input className="b b--white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password" 
                        onChange = {this.onPasswordChange}
                      />
                  </div>
                  </fieldset>
                  <div className="">
                      <input 
                          onClick={this.onSubmitSign}
                          className="b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib"
                          type="submit" value="Sign in" 
                      />
                  </div>
                  <div className="lh-copy mt3">
                  <p onClick={() => onRouteChange('register')} className=" f6 link dim white db pointer">Register</p>
                  </div>
              </div>
          </main>
      </article>
  );
  }
}

export default Signin;