import React, { Component } from 'react';
import { Link } from "react-router-dom";


import '../style/Home.css';

export default class Home extends Component {
  
    render() {
        return (        
        <div className="Nav">
            <div
            className="bk_Img"
            style={{
            backgroundImage: "url(https://i.pinimg.com/originals/76/cb/02/76cb0257e5dd4d96a3cfb7aeaa532104.gif)",
            backgroundSize: "stretch",
            height: "100vh",
            }}>
            <button>
                <Link to="/signup"><div>Sign up</div></Link>
            </button>
            <button>
                <Link to="/signin"><div>Sign in</div></Link>
            </button>
            <button>
                <Link to="/trivia"><div>Trivia</div></Link>
            </button>
            </div>
                
            </div>  
        )
    }
}
