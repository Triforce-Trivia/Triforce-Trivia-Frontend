import React, { Component } from 'react';
import { signup } from '../Utils.js';

export default class Signup extends Component {
    state = {
        display_name: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
        this.props.setUserName(this.state.display_name)
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await signup(this.state.display_name, this.state.email, this.state.password)
            this.props.signin(token)
            this.props.history.push('/trivia')
        } catch (e) {
            console.log(e.message)
        }
        // this.props.setUserName(this.state.display_name)
    }

    render() {
        console.log(this.state.display_name)
        return (
        <div>
        <div className="Nav">
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Name
                        <input 
                            name="display_name"
                            type='text'
                            value={this.state.display_name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Email
                        <input 
                            name="email"
                            type="email"
                            text="email"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Password
                        <input 
                            name="password"
                            type="password"
                            text="password"
                            onChange={this.handleChange}
                        />
                    </label>
                    <button >Sign Up</button>
                </form>
                </div>
            </div>
        )
    }
}
