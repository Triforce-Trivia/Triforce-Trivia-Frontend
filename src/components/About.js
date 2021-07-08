import React, { Component } from 'react';
import '../style/About.css'

export default class AboutUs extends Component {
    render() {
        return (
            <div
            className="bk_Img"
            style={{
            backgroundImage: "url(../../about/mystery-machine.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "400px",
            }}>
                <h2>Meet the Gang!</h2>
                
                    <h4 className="dimitra">Dimitra</h4>
                
                    <h4 className="chen">Chen</h4>
                
                    <h4 className="elise">Elise</h4>

                    <h4 className="scooby">Scooby</h4>

            </div>
        )
    }
}
