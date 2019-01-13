import React, { Component } from 'react';
import FetchResource from 'fetch/FetchResource'
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

    handleSubmit = () => {
        const { email, username, password, confirmPassword } = this.state
        if (email !== '' && username !== '' && password !== '' && confirmPassword !== '') {
            const data = {
                email: email,
                username: username,
                password: password
            }

            FetchResource.post(data, '/signup/create/')
            .then(res => {
                console.log("you did it!");
            })
            .catch(err => {
                console.log("you didn't do it...");
            })

        } else {
            console.log("empty field");
        }
        

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
                <div className="SignupButton" onClick={this.handleSubmit}>
                    <p>Create Account</p>
                </div>
            </div>
        )
    }
}