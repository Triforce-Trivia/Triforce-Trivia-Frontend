import React, { Component } from 'react';
import { signup } from './Utils.js';

export default class Signup extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await signup(this.state.email, this.state.password)
            this.props.signin(token)
            this.props.history.push('/trivia')
        } catch (e) {
            console.log(e.message)
        }
    }

    render() {
        return (
        <div>
        <div className="Nav">
                <form
                onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input 
                        name="email"
                        type={this.state.email}
                        text="email"
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Password
                        <input 
                        name="password"
                        type={this.state.password}
                        text="password"
                        onChange={this.handleChange}
                        />
                    </label>
                    <button>Sign Up</button>
                </form>
                </div>
            </div>
        )
    }
}
