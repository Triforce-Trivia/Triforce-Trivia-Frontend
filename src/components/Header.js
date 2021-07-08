import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="title-logo">
          <header>
            <img src="../logos/triforce-trivia-small3.png" alt="triforce-logo"></img>
            <h1>Triforce of Trivia</h1>
              <p className="home-link"><Link to="/">Home</Link></p>
              <p className="signin-link"><Link to="/signin">Sign In</Link></p>
              <p className="signup-link"><Link to="/signup">Sign Up</Link></p>
              <p className="userpage-link"><Link to="/userpage">Scores</Link></p>
              <p className="about-link"><Link to="/about">About Us</Link> </p>
               <p className="logout-link"><Link to="/">Log Out</Link></p>
            </header>
            </div>
            </div>
        )
    }
}
