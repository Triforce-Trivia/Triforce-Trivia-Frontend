import '../style/Werewolf.css';
import React, { Component } from 'react';
import { getWereWolves } from '../Utils';
import  WDetailPage  from './WDetailPage.js';

export default class Z1 extends Component {
        state = {

            // bgImage: "https://i.imgur.com/jIsHfiA.gif",
            // backgroundSize: "cover",
            // height: "600px",
            // backgroundRepeat: "no-repeat",
            // wereWolves, 
            // zs,
            questions: [],
            correct_answer: "",
            incorrect_answer: "", 
            scores: 0, 
            abs: 0, 
            life: 3, 
        }

    componentDidMount = async() => {
        const triviaquestions = await getWereWolves();
        
        this.setState({
            questions: triviaquestions,
            // zombies,  
            // zs,
            // bgImage: "url(https://i.imgur.com/jIsHfiA.gif)"
        })
    }


    handleClick = (e) => {
        if (this.state.questions.length - 1 === Math.abs(this.state.abs)) { 
            this.props.history.push('/userpage')
        }
        if (this.state.life === 0) {
            this.props.history.push('/gameover')
        }
        console.log(e.target.value, this.state.questions[this.state.abs])

        if (e.target.value === this.state.questions[this.state.abs].correct_answer) {
            this.setState({
                scores: this.state.scores + 1,
                // bgImage: `${this.state.zombies[Math.abs(this.state.scores)].url}`,
                abs: this.state.abs + 1, 
            })
            this.props.getScores(1)
        } else {
            this.setState({
                scores: this.state.scores - 1,
                // bgImage: `${this.state.zs[Math.abs(this.state.scores)].url}`,
                abs: this.state.abs + 1, 
                life: this.state.life - 1, 
            })
        }        
    }
    

    

    render() {
        console.log(this.state.questions)
        console.log(this.state.questions[this.state.abs])
        console.log(this.state.scores)
        return (
        <div className="triv">
            <div>
                <div 
                style={{
                    // backgroundImage: `url(${this.state.bgImage})`,
                    // backgroundSize: "cover",
                    // height: "600px",
                    // backgroundRepeat: "no-repeat",
                    // overflow: "visible"
                }}
                >
                <h2> {this.state.scores} </h2> 
                <h3>
                    <WDetailPage q={this.state.questions[this.state.abs]} />
                </h3>     
                <form>
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
        </div>
    </div>
        )
    }
}