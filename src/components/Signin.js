import React, { Component } from 'react';
import '../style/Sign.css'

export default class Signin extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        Email
                        <input type="email" />
                    </label>
                    <label>
                        Password
                        <input type="password" />
                    </label>
                    <button>Sign In</button>
                </form>
            </div>
        )
    }
}
