import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../style/Home.css';

export default class Home extends Component {
    render() {
        return (                  
            <div
            className="bk_Img"
            style={{
                backgroundImage: "url(https://i.pinimg.com/originals/76/cb/02/76cb0257e5dd4d96a3cfb7aeaa532104.gif)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: "stretch",
                backgroundPosition: "center",
                height: "100vh",
                width: "1200px",
                display: "flex",
                justifyContent: "center"
                    }}>
                    <section className="title-section">
                        <img className="scooby-logo" src="../scoobydoo/scoobydoo_logo3.png" alt="scoobydoo-logo"></img>
                        <h3 className="triforce-title">Triforce Trivia</h3>
                        <img className="the-gang" alt="scooby-gang" src="../scoobydoo/scooby-doo-1-logo.png"></img>
                        <div className="scary-char-div">
                            <img className="scary-characters" alt="scary-pirate" src="../scoobydoo/scooby_pirate.png"></img>
                            <img className="scary-characters" alt="scary-clown" src="../scoobydoo/scary_clown.png"></img>
                            <img className="scary-characters" alt="scary-ghoul" src="../scoobydoo/scooby_ghoul.png"></img>
                            </div>
                        <div className="button-div">
                            
                            <button>
                            <Link to="/signup"><div>Sign up</div></Link>
                        </button>
                        <button>
                            <Link to="/signin"><div>Sign in</div></Link>
                        </button>
                        {/* <button>
                            <Link to="/trivia"><div>Play As Guest</div></Link>
                        </button> */}
                    </div>
                    </section>
                </div>
        )
    }
}
