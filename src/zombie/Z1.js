import '../style/Zombie.css';
import React, { Component } from 'react';
import { getTrivia } from '../components/Utils';
import  ZDetailPage  from './ZDetailPage.js';
import zombies from './Zombies.js';
import { findById } from '../components/Fetch-Utils.js';

export default class Z1 extends Component {
        state = {
            number: 0,
            bgImage: "url(../../zombies/z0.gif)",
            backgroundSize: "cover",
            height: "600px",
            backgroundRepeat: "no-repeat",
            questions: [],
            correct_answer: "",
            incorrect_answer: "", 
            gameNumber: 0, 
            scores: 0 
        }

    componentDidMount = async() => {
        const triviaquestions = await getTrivia();
        
        triviaquestions.map(tquestion => this.setState({
            correct_answer: tquestion.correct_answer,
            incorrect_answer: tquestion.incorrect_answer,
        })
        )
        this.setState({
            questions: triviaquestions,
        })
    }


    handleSummit = (e) => {
        e.preventDefault(); 
    }

    handleClick = (e) => {
        if (this.state.questions.length - 1 === Math.abs(this.state.gameNumber)) { 
            this.props.history.push('/userpage')
        }
        console.log(e.target.value, Math.abs(this.state.gameNumber))
        e.target.value === this.state.correct_answer ? this.setState({
            scores: this.state.scores + 1,
            number: this.state.number + 1,
            bgImage: `url(../../zombies/z${this.state.number}.gif)`,
            gameNumber: this.state.gameNumber + 1, 
        }) : this.setState({
            scores: this.state.scores - 1,
            number: this.state.number - 1,
            bgImage: `url(../../zombies/z${this.state.number}.gif)`,
            gameNumber: this.state.gameNumber - 1, 
        })
    }
    
   

    render() {
        console.log(this.state.questions.length, this.state.gameNumber)
        return (
        <div className="triv">
            
            <div>
                <div 
                style={{
                    backgroundImage: this.state.bgImage,
                    backgroundSize: "cover",
                    height: "600px",
                    backgroundRepeat: "no-repeat",
                    overflow: "visible"
                }}
                >
                <h2> {this.state.scores} </h2> 
                <h3>
                    <ZDetailPage q={this.state.questions[Math.abs(this.state.gameNumber)]} />
                </h3>     
                <form onSubmit={this.onSubmit}>
                    <label>
                        True
                        <input 
                        type='radio'
                        value='True'
                        name='answers'
                        onClick={this.handleClick}
                        />
                    </label>
                    <label>
                        False
                        <input 
                            type='radio'
                            value='False'
                            name='answers'
                            onClick={this.handleClick}
                        /> 
                    </label>
                </form>
            </div>
            )
            </div>
        
        </div>
        )
    }
}