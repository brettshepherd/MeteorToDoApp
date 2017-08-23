import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class EmailPasswordForm extends Component {

getAndReturnData(){
  const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
  const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
  const password = ReactDOM.findDOMNode(this.refs.password).value.trim();

  return {name,email,password};
}

  render() {

    return (
      <form onSubmit = {(e)=>{this.props.submitAction(e, this.getAndReturnData())}}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input placeholder="Name" type="text" id="name" className="form-control" ref = 'name'/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input placeholder="Email" type="email" id="email" className="form-control" ref = 'email'/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input placeholder="Password" type="password" id="password" className="form-control" ref = 'password'/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" > {this.props.submitBtnLabel}</button>
        </div>
      </form>
    );
  }
}
