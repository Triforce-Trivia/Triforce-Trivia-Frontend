import React, { Component } from 'react';
import '../style/Zombie.css'

export default class Z1 extends Component {
        state = {
            number: 0,
            bgImage: "url(../../zombies/z0.gif)",
            backgroundSize: "cover",
            height: "600px",
            backgroundRepeat: "no-repeat",
        }

componentDidMount = () => {
    this.setState({
        number: 0,
        bgImage: "url(../../zombies/z0.gif)",
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
        console.log(this.state.number)
        return (
        <div className="triv">
                <div 
                    style={{
                    backgroundImage: this.state.bgImage,
                    backgroundSize: "cover",
                    height: "600px",
                    backgroundRepeat: "no-repeat",
                    overflow: "visible"
                    }}
                    >
                    
                    <button onClick={this.wrongAnswer}>False</button>
                </div>
                <div 
                    style={{
                    backgroundImage: this.state.bgImage,
                    backgroundSize: "cover",
                    height: "600px",
                    backgroundRepeat: "no-repeat",
                    overflow: "visible"
                    }}
                    >
                    <button onClick={this.rightAnswer}>True</button>
                </div>
        </div>
        )
    }
}