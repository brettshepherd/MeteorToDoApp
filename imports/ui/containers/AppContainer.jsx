import React, { Component } from 'react';
import { withHistory } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';
import { withRouter } from 'react-router'
// pages
import Register from '../pages/register.jsx';
import Login from '../pages/login.jsx';

export default class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = this.getMeteorData();
    this.state.register = false;
    console.log(this.state);
    this.logout = this.logout.bind(this);
  }

  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }

  logout(e){
    e.preventDefault();
    Meteor.logout( (err) => {
        if (err) {
            console.log( err.reason );
        } else {
          this.setState({isAuthenticated: false});
        }
    });
  }

loginSuccess(){
  this.setState({isAuthenticated: true});
  this.props.history.push('/Home');
}

registerToggle(){
  this.setState({register: !this.state.register});
}

//Login and Register
loadLoginOrRegister(){
  if(!this.state.isAuthenticated && !this.state.register){
    return(
      <Login loginTrue = {this.loginSuccess.bind(this)} registerToggle = {this.registerToggle.bind(this)}/>
    );
  }
  else if (!this.state.isAuthenticated && this.state.register) {
    return(
      <Register registerToggle = {this.registerToggle.bind(this)}/>
    );
  }
}

//loadMainContent
loadMainContent(){
  if(this.state.isAuthenticated){
    return(
        <MainContainer logout = {this.logout} location = {this.props.location}/>
    );
  }
}

  render(){

    return (
      <div>
        {this.loadLoginOrRegister()}
        {this.loadMainContent()}
      </div>
    );
  }
}
