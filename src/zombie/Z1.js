import '../style/Zombie.css';
import React, { Component } from 'react';
import { createScore, getZombies, updateScore } from '../Utils';
import  ZDetailPage  from './ZDetailPage.js';
import zombies from './Zombies.js';
import zs from './BadZ'

zombies.reverse()

// for maintainability, I would like to see a more descriptive name for this component, like ZombieQuiz
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

    getCurrentQuestion() {
        return this.state.questions[this.state.abs]
    }

    handleClick = async(e) => {
        e.preventDefault();

        if (
            this.state.questions.length - 1 === Math.abs(this.state.abs) 
        || this.state.life === 0
        ) { 
            this.props.history.push('/leaderboard')
        }

        const isCorrect = e.target.value === this.getCurrentQuestion().correct_answer;

        if (isCorrect) {
            const next = this.state.zombies[Math.abs(this.state.scores)];
            this.setState({
                scores: this.state.scores + 1,
                bgImage: `${next.url}`,
                description: `${next.description}`,
                abs: this.state.abs + 1, 
            })
            this.props.getScores(1)
            await updateScore(this.props.token, this.state.scores + 1, this.state.game_id)
        } else {
            const prev = this.state.zs[Math.abs(this.state.scores - 1)]
            this.setState({
                scores: this.state.scores - 1,
                bgImage: `${prev.url}`,
                description: `${prev.description}`,
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
                    <ZDetailPage q={this.getCurrentQuestion()} />
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