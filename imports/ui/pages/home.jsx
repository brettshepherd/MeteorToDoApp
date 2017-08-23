import React, { Component, PropTypes } from 'react';
import ListContainer from '../listContainer.jsx';
import Header from '../header.jsx';
import SideBar from '../sideBar.jsx';
import Account from '../../ui/pages/account.jsx'
import { Route } from 'react-router-dom';
// App component - represents the whole app
export default class Home extends Component {

  //render
  render() {
    let currentUser = this.props.currentUser;
    // let userDataAvailable = (currentUser !== undefined);
    //let loggedIn = (currentUser && userDataAvailable);
    return (

        <div >

          <Route render={ () => <Header logout = {this.props.logout}/>} />
          <div className = 'homeContentCont'>
            <Route render={ () => <SideBar logout = {this.props.logout}/>} />
            <div className = 'homeContent'>
              <Route exact={true} path="/Home" render={ () => <ListContainer userOBJ = {currentUser}/>} />
              <Route exact={true} path="/Account" render={ () => <Account userOBJ = {currentUser}/>} />
            </div>
          </div>
        </div>

    );
  }
}
//a
