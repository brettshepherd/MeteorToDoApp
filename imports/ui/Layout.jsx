import React, { Component, PropTypes } from 'react';
import Header from './header.jsx'

export default class Layout extends Component {


  render() {

    return (
    <Header className = 'topHeader' logout = {this.props.logout}>
      {this.props.children}
    </Header>
    );
  }
}
