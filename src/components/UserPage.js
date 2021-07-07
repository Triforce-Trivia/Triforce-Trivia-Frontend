import React, { Component } from 'react';
import '../style/UserPage.css'

class UserPage extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Score: {this.props.score}</p>
                <button>Home</button>
                <button>Logout</button>
            </div>
        )
    }
}

export default UserPage