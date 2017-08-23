import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import Login from './login.jsx';
import Register from './register.jsx';
import Home from './home.jsx';
import Header from './header.jsx';
import Account from './account.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// App component - represents the whole app
export default class App extends Component {

  //render
  render() {
    return (
      <Router>
        <div >
          <Header/>
          <Route exact path='/' component={Login}/>
          <Route exact path='/Register' component={Register}/>
          <Route exact path='/Home' component={Home}/>
          <Route exact path='/Account' component={Account}/>
        </div>
      </Router>
    );
  }
}
