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
                    <section className="dimitra-section">
                        <h4 className="dimitra">
                            Dimitra
                        </h4>
                        <h3 className="dimitra-bio">
                            is a Fullstack Software Engineer and is interested in creating apps and supporting companies, startups, etc. that have a mission-driven mindset to effect positive change in their local communities and abroad.
                            She is passionate about developing and providing solutions to everyday problems, and finding ways to give access to resources for those who are marginalized, overlooked, and discounted. It is her dream to use her coding experience to help people achieve their goals.
                        </h3>
                    </section>
                    
                    <section className="chen-section">
                        <h4 className="chen">
                            Chen
                        </h4>
                        <h3 className="chen-bio">
                            is a Fullstack Software Engineer and is a curious person who likes to learn new things and challenge myself.  I like to travel to different countries and meet a people with diverse background. When I am not coding, I usually spend time jogging or meditating.
                        </h3>
                    </section>

                    <section className="elise-section">
                        <h4 className="elise">
                            Elise
                        </h4>
                        <h3 className="elise-bio">
                            is a Fullstack Software Engineer, dancer, gamer, cat mom, and costumer with a love for CSS.
                        </h3>
                    </section>

                    <section className="scooby-section">
                        <h4 className="scooby">
                            Scooby
                        </h4>
                        <h3 className="scooby-bio">
                            is a Very Good Boi.
                        </h3>
                    </section>

                        <img className="gang" src="https://fontmeme.com/permalink/210708/7855ed604b6213110032cbf529a0cf59.png" alt="meet-the-gang"/>
                </div>
            </div>
        )
    }
}
