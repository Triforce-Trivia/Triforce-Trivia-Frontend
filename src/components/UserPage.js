import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/UserPage.css'

class UserPage extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Score: {this.props.score}</p>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default UserPage