import React, { Component } from 'react';
import '../style/About.css';
// import gang from './Us.js'

export default class AboutUs extends Component {

    render() {
        return (
            <div className="aboutus">
                <div
                className="bk_Img"
                style={{
                backgroundImage: "url(../../about/mystery-machine.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "400px",
                }}>
                        <h4 onClick={this.learnMore}className="dimitra">Dimitra</h4>
                    
                        <h4 className="chen">Chen</h4>
                    
                        <h4 className="elise">Elise</h4>

                        <h4 className="scooby">Scooby</h4>

                        <img className="gang" src="https://fontmeme.com/permalink/210708/7855ed604b6213110032cbf529a0cf59.png" alt="meet-the-gang"/>
                </div>
            </div>
        )
    }
}
