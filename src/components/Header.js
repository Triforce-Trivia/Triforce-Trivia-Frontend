import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="title-logo">
            <header>
                        <img className="triforce-logo" src="../logos/triforce-trivia-small2.png" alt="triforce-logo"></img>
                        <div className="nav-links">
                            <a className="home-link" href="/">Home</a>
                            <a className="signin-link" href="/signin">Sign In</a>
                            <a className="signup-link" href="/signup">Sign Up</a>
                            <a className="userpage-link" href="/leaderboard">Scores</a>
                            <a className="about-link" href="/about">About Us</a>
                            <a href="/" onClick={this.props.logout} className="logout-link">Log Out </a> 
                        </div>
            </header>
            </div>
            </div>
        )
    }
}
