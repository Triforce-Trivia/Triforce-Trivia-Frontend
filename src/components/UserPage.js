import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/UserPage.css'

class UserPage extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Score: {this.props.score}</p>
                <button onClick={() => 
                    this.props.postScores(this.props.token_key)} 
                >Post Score</button>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default UserPage