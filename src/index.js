import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth0ProviderWithHistroy from './auth0-provider-with-history'
import {BrowserRouter as Router} from 'react-router-dom'
ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistroy > 
    <App /> 
    </Auth0ProviderWithHistroy> 
  </Router>,
  document.getElementById('root')
);

