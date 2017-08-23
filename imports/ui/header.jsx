import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Header extends Component {


  render() {
    return (
    <header className = 'topHeader'>
      <img className = 'logo' src='images/logo.png'/>
      <ul className = 'headerUl'>
        <li>
          <NavLink to="/Home" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Account" activeClassName="active">Account</NavLink>
        </li>
        <li>
          <p onClick = {this.props.logout.bind(this)}>Logout</p>
        </li>
      </ul>
    </header>
    );
  }
}
