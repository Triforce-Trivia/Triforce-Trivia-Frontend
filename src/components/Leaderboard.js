import React, { Component } from 'react'
import '../style/Scoreboard.css';
import { getLeaderBoard } from '../Utils';

export default class Leaderboard extends Component {
    state = {
        leaderboard: []
    }
    componentDidMount = async () => {
        const leaderboard = await getLeaderBoard(this.props.token)
        this.setState({leaderboard})
    }


    render() {
        return (
            <div className="title-section">
                <h1 className="scoreboard-title">Check Out Your Scores!</h1>
                {this.state.leaderboard.map(item => 
                    <p className="user">{item.display_name}: {item.total_scores}</p>)}
                
            </div>
        )
    }
}
