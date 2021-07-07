import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Trivia.css';

export default class Trivia extends Component {

    render() {
        return (
            <div className="triv">
                <h2>Welcome, user!</h2>
                <div className="triforce">
                    <div className="zombie"><Link to="/z1">Z</Link></div>

                    <button className="werewolf"><Link to="/w1"><div>W</div></Link></button>

                    <button className="alien"><Link to="/a1"><div>A</div></Link></button>
                </div>
            </div>
        )
    }
}