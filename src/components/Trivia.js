import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Trivia.css'

export default class Trivia extends Component {

    render() {
        return (
            <div className="triv">
                <h2>Welcome, user!</h2>
                <button className="zombie"><Link to="/z1"><div>Z</div></Link></button>

                <button onClick={this.handleAnswer} 
                className="werewolf">W</button>

                <button onClick={this.handleAnswer} 
                className="alien">A</button>

            </div>
        )
    }
}