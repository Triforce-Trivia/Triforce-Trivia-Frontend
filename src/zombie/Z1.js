import '../style/Zombie.css';
import React, { Component } from 'react';
import { getZombies } from '../Utils';
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
        const triviaquestions = await getZombies();
        
        this.setState({
            questions: triviaquestions,
            // description: ,
            zombies,  
            zs,
            bgImage: "url(https://i.imgur.com/jIsHfiA.gif)"
        })
    }

    handleClick = (e) => {
        if (this.state.questions.length - 1 === Math.abs(this.state.abs)) { 
            this.props.history.push('/userpage')
        }
        if (this.state.life === 0) {
            this.props.history.push('/gameover')
        }

        if (e.target.value === this.state.questions[this.state.abs].correct_answer) {
            console.log(this.state.scores + 1, this.state.zombies[Math.abs(this.state.scores + 1)])
            this.setState({
                scores: this.state.scores + 1,
                bgImage: `${this.state.zombies[Math.abs(this.state.scores + 1)].url}`,
                description: `${this.state.zombies[Math.abs(this.state.scores + 1)].description}`,
                abs: this.state.abs + 1, 
            })
            this.props.getScores(1)
        } else {
            this.setState({
                scores: this.state.scores - 1,
                bgImage: `${this.state.zs[Math.abs(this.state.scores - 1)].url}`,
                description: `${this.state.zs[Math.abs(this.state.scores - 1)].description}`,
                abs: this.state.abs + 1, 
                life: this.state.life - 1, 
            })
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
                <h2> {this.state.scores} </h2> 
                <h2>{this.state.description}</h2>
                <h3>
                    <ZDetailPage q={this.state.questions[this.state.abs]} />
                </h3>  
                <div className='buttons'>  
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
    </div>
        )
    }
}