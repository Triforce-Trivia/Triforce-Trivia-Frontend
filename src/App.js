import React, { Component } from 'react';
import './style/App.css';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import AboutUs from './components/AboutUs.js';
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

login = (token) => {
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
                  login={this.login} 
                  {...routerProps}/>} 
                />
          <Route 
            exact path='/signin' 
              render={(routerProps) => <Signin
                login={this.login} 
                {...routerProps}/>} 
              />
          <Route 
            exact path='/signup' 
              render={(routerProps) => <Signup
                login={this.login} 
                {...routerProps}/>} 
              />
          <Route 
            exact path='/about'               
            render={(routerProps) => <AboutUs
              login={this.login} 
              {...routerProps}/>} 
              />
          <Route 
            exact path='/trivia' 
            render={(routerProps) => <Trivia
              login={this.login} 
              {...routerProps}/>} 
              />
          <Route 
          exact path='/z1' 
            render={(routerProps) => <Z1
              login={this.login} 
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
