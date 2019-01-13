import React, { Component } from 'react';
import './styles/SignupContainer.scss'

export default class SignupContainer extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    }

    handleChange(field, event) {
        const newState = this.state
        newState[field] = event.target.value
        this.setState(newState);
    }

    render() {
        const { email, username, password, confirmPassword } = this.state

        return (
            <div id="SignupContainer">
                <p className="hermesTitle">Hermes</p>
                <div id="SignupBlock">
                    <form id="SignupFormContainer">
                        <input 
                            type="text" 
                            value={email} 
                            placeholder="Email" 
                            onChange={this.handleChange.bind(this, 'email')} />  
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
                        <input 
                            type="password" 
                            value={confirmPassword} 
                            placeholder="Confirm Password"
                            onChange={this.handleChange.bind(this, 'confirmPassword')} /> 
                    </form>
                </div>
                <div className="SignupButton">
                    <p>Create Account</p>
                </div>
            </div>
        )
    }
}