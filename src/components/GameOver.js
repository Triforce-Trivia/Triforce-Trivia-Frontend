import React, { Component } from 'react';
import '../style/GameOver.css'

export default class GameOver extends Component {
    render() {
        return (
            <div className="gameover">
                <h3>Mr. Jenkins ran off, and whatever has been happening in these woods may never be solved. </h3>
                <p className="end">Game Over, man, game over!</p>
                <img className="shaggy-gif"src="https://media1.tenor.com/images/62ca7d092e9d04f24056cecabba3282f/tenor.gif?itemid=5665424" alt="sad shaggy"></img>
            </div>
        )
    }
}