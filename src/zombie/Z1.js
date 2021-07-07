import '../style/Zombie.css';
import React, { Component } from 'react';
import { getTrivia } from '../components/Utils';
import  DetailPage  from './DetailPage.js'

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

    rightAnswer = (e) => {
        this.setState({
            number: this.state.number + 1,
            bgImage: `url(../../zombies/z${this.state.number}.gif)`,
            gameNumber: this.state.gameNumber + 1
        })
    }
        
    wrongAnswer = (e) => {
        this.setState({
            number: this.state.number - 1,
            bgImage: `url(../../zombies/z${this.state.number}.gif)`,
            gameNumber: this.state.gameNumber + 1
        })
    }

    render() {
        console.log(this.state.gameNumber)
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
                <h3>
                    <DetailPage q={this.state.questions[this.state.gameNumber]} />
                </h3>     

                <button onClick={this.rightAnswer}>
                    {this.state.correct_answer}
                </button>

                <button onClick={this.wrongAnswer} >
                    {this.state.incorrect_answer} 
                </button>
                
                </div>
            )
            </div>
        
        </div>
        )
    }
}