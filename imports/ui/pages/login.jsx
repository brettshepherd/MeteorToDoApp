
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'


export default class Login extends Component {

  constructor(props){
      super(props);
      this.state = {
        error: ''
      };
    }


    handleSubmit(e){
      e.preventDefault();
      let email = document.getElementById("login-email").value;
      let password = document.getElementById("login-password").value;
      Meteor.loginWithPassword(email, password, (err) => {
        if(err){
          this.setState({
            error: err.reason
          });
          console.log(this.state.error);
        }
        else{
          this.props.loginTrue();
        }
      });
    }


    render() {
      return (
        <div className = 'loginBoxCont'>
          <img className = 'logoLogin' src='images/logo.png'/>
          <div className = 'loginBox'>
            <h1>Log In</h1>
          <form onSubmit = {(e)=>{this.handleSubmit(e)}}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input placeholder="johndoe@email.com" type="email" id="login-email" className="form-control" ref = 'email'/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input placeholder="Password" type="password" id="login-password" className="form-control" ref = 'password'/>
            </div>
            <div className="loginBtns">
              <p onClick = {this.props.registerToggle.bind(this)} >Create Account</p>
              <button type="submit" className="btn btn-primary" >Login</button>
            </div>
          </form>

          </div>
        </div>
      )
    }
}
