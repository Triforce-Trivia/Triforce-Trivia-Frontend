import React, { Component } from 'react';
import '../style/Zombie.css';
import { getTrivia } from '../components/Utils';

export default class Z1 extends Component {
        state = {
            number: 0,
            bgImage: "url(../../zombies/z0.gif)",
            backgroundSize: "cover",
            height: "600px",
            backgroundRepeat: "no-repeat",
            questions: [],
            correct_answer: "",
            incorrect_answer: ""
        }

    componentDidMount = async() => {
        const triviaquestions = await getTrivia();
        
        triviaquestions.map(tquestion => this.setState({
            correct_answer: tquestion.correct_answer,
            incorrect_answer: tquestion.incorrect_answer,
        })
        )
        this.setState({
            questions: triviaquestions
        })
    }

    rightAnswer = (e) => {
        this.setState({
            number: this.state.number + 1,
            bgImage: `url(../../zombies/z${this.state.number}.gif)`,
        })
    }
        
    wrongAnswer = (e) => {
        this.setState({
            number: this.state.number - 1,
            bgImage: `url(../../zombies/z${this.state.number}.gif)`,
        })
    }

    render() {
        console.log(this.state)
        return (
        <div className="triv">
            <div>
            { this.state.questions.map(question => 
                <div 
                style={{
                backgroundImage: this.state.bgImage,
                backgroundSize: "cover",
                height: "600px",
                backgroundRepeat: "no-repeat",
                overflow: "visible"
                }}
                >
                <h3>{question.question}</h3>

                <button onClick={this.rightAnswer}>
                    {this.state.correct_answer}
                </button>

                <button onClick={this.wrongAnswer}>
                    {this.state.incorrect_answer}
                </button>
                
                </div>
            )
    }
            </div>
            
                
                    {/* <button onClick={this.rightAnswer}>{this.question.correct_answer}</button>
                    <button onClick={this.wrongAnswer}>False</button> */}

        </div>
        )
    }
}