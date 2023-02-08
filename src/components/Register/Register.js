import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onRegisterSubmit = () => {
        if(!this.state.name || !this.state.email || !this.state.password){
            return alert("please, fill out all fields")
        }
        fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
            method: 'post',
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        this.props.onRouteChange('signin')
    }

    render() {
        return (
            <article className="br3 ba b--white-30 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 white-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db black fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="name"  
                                id="name" 
                                onChange = {this.onNameChange}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db black fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-100" 
                                type="email"
                                name="email-address"  
                                id="email-address" 
                                onChange = {this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db black fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password" 
                                onChange = {this.onPasswordChange}
                            />
                        </div>
                        </fieldset>
                        <div className="">
                            <input 
                                onClick={this.onRegisterSubmit}
                                className="b ph3 pv2 white input-reset ba b--white bg-transparent grow pointer f6 dib"
                                type="submit" value="Register" 
                            />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;