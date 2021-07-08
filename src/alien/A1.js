import '../style/Alien.css';
import React, { Component } from 'react';
import { getTrivia } from '../components/Utils';
import  ADetailPage  from './ADetailPage.js'

export default class A1 extends Component {
        state = {
            number: 0,
            bgImage: "url(../../aliens/a0.gif)",
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
            bgImage: `url(../../aliens/a${this.state.number}.gif)`,
            gameNumber: this.state.gameNumber + 1
        })
    }
        
    wrongAnswer = (e) => {
        this.setState({
            number: this.state.number - 1,
            bgImage: `url(../../aliens/a${this.state.number}.gif)`,
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
                    <ADetailPage q={this.state.questions[this.state.gameNumber]} />
                </h3>     

                <button onClick={this.rightAnswer}>
                    {this.state.correct_answer}
                </button>

                <button onClick={this.wrongAnswer} >
                    {this.state.incorrect_answer} 
                </button>
                
                </div>
            
            </div>
        
        </div>
        )
    }
}