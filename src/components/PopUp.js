import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/PopUp.css'

export default class PopUp extends Component {
    handleClick = () => {
        this.props.toggle();
    };
    render() {
    return (
        <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={this.handleClick}>&times;    </span>
                <section className="pop">
                    <p>
                        Well gang, something fishy has been happening around town in the woods, and we need to find out what's happening! The cherry orchard stopped blooming, townsfolk have been seeing some spooky-looking shadows in the woods, and people are going missing! I've asked Ol' Mr. Jenkins to keep guard while we investigate, but he just thinks we're a bunch of foolish meddling kids.
                    </p>
                    <p> 
                        Can we answer enough of his trivia questions to earn his trust and get to the bottom of this mystery before it's too late? 
                    </p>
                    <Link to="/z1">Let's go, gang!
                    </Link> 
                </section>
                
            </div>
            
        </div>
    );
    }
}
