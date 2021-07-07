import React, { Component } from 'react';
import './style/App.css';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import AboutUs from './components/About.js';
import Home from './components/Home.js';
import Trivia from './components/Trivia.js';
import Z1 from '../src/zombie/Z1.js';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

export default class App extends Component {
  state = { token: localStorage.getItem('TOKEN') }

signin = (token) => {
  this.setState({ token })
  localStorage.setItem('TOKEN', token)
}

  render() {
    return (

      <div className="Nav">
        <Router>
          <header>
                    <h1>Triforce of Trivia</h1>
                    <Link to="/">Home</Link>
          </header> 
          <Switch>
          <Route 
              exact path='/' 
                render={(routerProps) => <Home
                  signin={this.signin} 
                  {...routerProps}/>} 
                />
          <Route 
            exact path='/signin' 
              render={(routerProps) => <Signin
                signin={this.signin} 
                {...routerProps}/>} 
              />
          <Route 
            exact path='/signup' 
              render={(routerProps) => <Signup
                signin={this.signin} 
                {...routerProps}/>} 
              />
          <Route 
            exact path='/about'               
            render={(routerProps) => <AboutUs
              signin={this.signin} 
              {...routerProps}/>} 
              />
          <Route 
            exact path='/trivia' 
            render={(routerProps) => <Trivia
              signin={this.signin} 
              {...routerProps}/>} 
              />
          <Route 
          exact path='/z1' 
            render={(routerProps) => <Z1
              signin={this.signin} 
              {...routerProps}/>} 
            />
          </Switch>

          <footer>
            <Link to="/about">About Us</Link> 
          </footer>

        </Router>
      </div>
    );
  }
}
