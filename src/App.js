import React, { Component } from 'react';
import './style/App.css';
import Header from './components/Header';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import AboutUs from './components/About.js';
import UserPage from './components/UserPage';
import Home from './components/Home.js';
import Trivia from './components/Trivia.js';
import GameOver from './components/GameOver';
import Logout from './components/Leaderboard';
import Z1 from '../src/zombie/Z1.js';
// import A1 from '../src/alien/A1.js';
// import W1 from '../src/werewolf/W1.js';
import request from 'superagent'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import Leaderboard from './components/Leaderboard';

  export default class App extends Component {
    state = { 
      token: localStorage.getItem('TOKEN'), 
      scores: 0, 
      display_name: ''
    }

  signin = (token) => {
    this.setState({ token })
    localStorage.setItem('TOKEN', token)
  }

  logout = () => {
    this.setState({token: ''})
    localStorage.setItem('TOKEN', '')
  }

  getScores = (newScores) => {
    this.setState((prevScores) => { 
      return {scores: prevScores.scores + newScores}
    })
  }

  setUserName = (display_name) => {
    this.setState({display_name: display_name})
  }

  // setuserName = (display_name) => {
  //   this.setState({display_name: display_name})
  // }

  // post request to the backend function
  postScores = async (token) => {
  const data = await request
      // .post("https://triforce-trivia.herokuapp.com/api/scores")
      .post("https://triforce-trivia.herokuapp.com/api/userscores")
      .send({
        display_name: 'this.state.display_name', 
        total_scores: this.state.scores,
      })
      .set('Authorization', token)

    console.log(data.body)
  }

  render() {
  console.log(this.state.display_name)
  return (
  <div className="Nav">
  <Router>
        <Header logout={this.logout} />
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
                // setuserName={this.setuserName}
                {...routerProps}/>} 
          />
          <Route 
            exact path='/signup' 
              render={(routerProps) => <Signup
                signin={this.signin} 
                setUserName={this.setUserName}
                {...routerProps}/>} 
          />
          <Route 
            exact path='/logout' 
              render={(routerProps) => <Logout
                signin={this.logout} 
                {...routerProps}/>} 
          />

          <Route 
            exact path='/about'               
            render={(routerProps) => <AboutUs
              signin={this.signin} 
              {...routerProps}/>} 
          />

          <Route 
            exact path='/leaderboard'               
            render={(routerProps) => <Leaderboard
              signin={this.signin}
            token={this.state.token}
              {...routerProps}/>} 
          />

          <Route 
            path='/trivia' 
            exact
            render={(routerProps) => 
              <Trivia
                {...routerProps} 
                signin={this.signin} 
                name={this.state.display_name}
            />} 
          /> 

          <Route 
            path='/userpage'
            exact 
            render={(routerProps) => 
              this.state.token ? 
              <UserPage
                {...routerProps}
                token_key={this.state.token} 
                score={this.state.scores} 
                name={this.state.display_name}
                postScores={this.postScores} 
              />
                : 
                <Redirect to='/' />} 
          /> 
          
          <Route 
            exact path='/gameover'
            render={(routerProps) => this.state.token ? <GameOver
              signin={this.signin} 
              {...routerProps}/>: <Redirect to='/' />} 
          /> 

          <Route 
          exact path='/z1' 
            render={(routerProps) =>  <Z1
              token={this.state.token}
              signin={this.signin} getScores={this.getScores}
              {...routerProps}/>} 
          /> 
{/* 
          <Route 
          exact path='/w1' 
            render={(routerProps) => <W1
              signin={this.signin} getScores={this.getScores}
              {...routerProps}/>} 
          />
          
          <Route 
          exact path='/a1' 
            render={(routerProps) => <A1
              signin={this.signin} getScores={this.getScores}
              {...routerProps}/>} 
          /> */}

  
          </Switch>
  
          <footer className="footer">
            <Link to="/about"></Link> 
          </footer>

        </Router>
      </div>
    );
  }
}
