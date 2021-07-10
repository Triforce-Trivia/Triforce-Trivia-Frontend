import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../style/Trivia.css';
import PopUp from './PopUp.js';

export default class Trivia extends Component {
    
    state = {
        seen: false
        };

    togglePop = () => {
        this.setState({
        seen: !this.state.seen
        });
    };
    render() {
        console.log(this.props.name)
        return (
            <div className="triv">
                <h2>Hop in, {this.props.name}!</h2>
                <div className="triforce">
                    <div className="z-container">
                        <button className="zombie" onClick={this.togglePop}>
                            {/* nice idea for toggling the popup state */}
                            {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
                        </button>
                    </div>
                    {/* <button className="werewolf"><Link to="/w1"><div>W</div></Link></button> */}


                    {/* <button className="alien"><Link to="/a1"><div>A</div></Link></button> */}
                </div>
            </div>
        )
    }
}