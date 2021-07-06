import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (
        <div>
        <div className="Nav">
                <form>
                    <label>
                        Email
                        <input type="email" />
                    </label>
                    <label>
                        Password
                        <input type="password" />
                    </label>
                    <button>Sign Up</button>
                </form>
                </div>
            </div>
        )
    }
}
