import React, { Component, PropTypes } from 'react';
import { Route,Link } from 'react-router-dom';

export default class Register extends Component {

  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  }

  handleSubmit(e){
   e.preventDefault();
   let name = document.getElementById("signup-name").value;
   let email = document.getElementById("signup-email").value;
   let password = document.getElementById("signup-password").value;
   Accounts.createUser({email: email, username: name, password: password}, (err) => {
     if(err){
       this.setState({
         error: err.reason
       });
     } else {
       this.props.history.push('/login');
     }
   });
 }

  render() {

    return (
      <div className = 'loginBoxCont'>
        <img className = 'logoLogin' src='images/logo.png'/>
        <div className = 'loginBox'>
        <h1>Sign Up</h1>
        <form onSubmit = {(e)=>{this.handleSubmit(e)}}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input placeholder="Name" type="text" id="signup-name" className="form-control" ref = 'name'/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input placeholder="Email" type="email" id="signup-email" className="form-control" ref = 'email'/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input placeholder="Password" type="password" id="signup-password" className="form-control" ref = 'password'/>
          </div>
          <div className="loginBtns">
            <Link to='/login'>Already Have An Account?</Link>
            <button type="submit" className="btn btn-primary" >Next</button>
          </div>
        </form>

      </div>
    </div>
    )
  }
}
