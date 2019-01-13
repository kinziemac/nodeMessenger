import React, { Component } from 'react';
import './styles/LoginContainer.scss'

export default class LoginContainer extends Component {
    state = {
        username: '',
        password: '',
    }

    handleChange(field, event) {
        const newState = this.state
        newState[field] = event.target.value
        this.setState(newState);
    }

    render() {
        const { username, password } = this.state

        return (
            <div id="LoginContainer">
                <p className="hermesTitle">Hermes</p>
                <div id="LoginBlock">
                    <form id="LoginFormContainer">
                        <input 
                            type="text" 
                            value={username} 
                            placeholder="Username"
                            onChange={this.handleChange.bind(this, 'username')} /> 
                        <input 
                            type="password" 
                            value={password} 
                            placeholder="Password"
                            onChange={this.handleChange.bind(this, 'password')} /> 
                    </form>
                </div>
                <div className="SignupButton">
                    <p>Login</p>
                </div>
            </div>
        )
    }
}