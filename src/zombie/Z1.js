import '../style/Zombie.css';
import React, { Component } from 'react';
import { createScore, getZombies, updateScore } from '../Utils';
import  ZDetailPage  from './ZDetailPage.js';
import zombies from './Zombies.js';
import zs from './BadZ'

zombies.reverse()

export default class Z1 extends Component {
        state = {
            bgImage: "https://i.imgur.com/jIsHfiA.gif",
            backgroundSize: "cover",
            height: "600px",
            backgroundRepeat: "no-repeat",
            questions: [],
            correct_answer: "",
            incorrect_answer: "", 
            scores: 0,
            description: "", 
            zombies,
            zs,
            abs: 0, 
            life: 5, 
        }

    componentDidMount = async() => {
        const game = await createScore(this.props.token);
        const triviaquestions = await getZombies();
        
        this.setState({
            questions: triviaquestions,
            game_id: game.id,
            zombies,  
            zs,
            bgImage: "url(https://i.imgur.com/jIsHfiA.gif)"
        })
    }

    handleClick = async(e) => {
        e.preventDefault();
        if (this.state.questions.length - 1 === Math.abs(this.state.abs)) { 
            this.props.history.push('/leaderboard')
        }
        if (this.state.life === 0) {
            this.props.history.push('/leaderboard')
        }

        if (e.target.value === this.state.questions[this.state.abs].correct_answer) {
            this.setState({
                scores: this.state.scores + 1,
                bgImage: `${this.state.zombies[Math.abs(this.state.scores)].url}`,
                description: `${this.state.zombies[Math.abs(this.state.scores)].description}`,
                abs: this.state.abs + 1, 
            })
            this.props.getScores(1)
            await updateScore(this.props.token, this.state.scores + 1, this.state.game_id)
        } else {
            this.setState({
                scores: this.state.scores - 1,
                bgImage: `${this.state.zs[Math.abs(this.state.scores - 1)].url}`,
                description: `${this.state.zs[Math.abs(this.state.scores - 1)].description}`,
                abs: this.state.abs + 1, 
                life: this.state.life - 1, 
            })
            await updateScore(this.props.token, this.state.scores - 1, this.state.game_id)
        }        
    }

    render() {
        return (
        <div className="triv">
            <div>
                <div className="questions"
                style={{
                    backgroundImage: `url(${this.state.bgImage})`,
                    backgroundSize: "cover",
                    height: "600px",
                    backgroundRepeat: "no-repeat",
                    overflow: "visible"
                }}
                >
                
                

                <div className="jenkins">
                <h2 className="current-score"> {this.state.scores} </h2> 
                <h3 className="trivia-q">
                    <ZDetailPage q={this.state.questions[this.state.abs]} />
                </h3>  
                <h2 className="description">{this.state.description}</h2>
                </div>
                <div className='buttons'>  
                
                    <button type="button">
                        <label>
                            True
                        </label>
                        <input
                            className="boo-butt" 
                            type='radio'
                            value='True'
                            name='answers'
                            onClick={this.handleClick}
                        />
                    </button>

                    <button type="button">
                        <label>
                            False
                        </label>
                        <input 
                            className="boo-butt" 
                            type='radio'
                            value='False'
                            name='answers'
                            onClick={this.handleClick}
                        /> 
                    </button>

                </div> 
            </div>
        </div>
    </div>
        )
    }
}