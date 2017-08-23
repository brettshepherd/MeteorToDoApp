import React, { Component, PropTypes } from 'react';
import { TasksDB } from '../api/tasks.js';
import TagPopUp from './tagPopUp.jsx';

// Task component - represents a single todo item
export default class DotPopUp extends Component {

constructor(){
  super();
  this.state = {
    tagCLick: false
  };
}

changeTagColor(color){
  TasksDB.update(this.props.id, {
    $set: {
      tagColor: color,
      tag: true
     }
  });
}
//toggle tag on and off
tagBoxStateToggle(){
    this.setState({tagCLick: !this.state.tagCLick});
}
//toggle tag color box on and off
tagPopUp(){
  if(this.state.tagCLick){
    return( <TagPopUp toggleUnmount = {() =>{this.props.toggleUnmount()}} changeTagColor = {(color) =>{this.changeTagColor(color)}} secondClass = "ellipseTagPopUp"/>);
  }
}


stopProp(e){
  e.stopPropagation();
}
  render() {

    return (

        <div className='dotPopUpBox' onClick = {this.stopProp.bind(this)} >
              <img className= 'popUpIMG'  src='images/edit.png' onClick = {() =>{this.props.toggleUnmount()}}/>
              <img className= 'popUpIMG' src='images/pin.png' onClick = {() => {this.props.togglePin();this.props.toggleUnmount()}} />
              <div className = 'taskTagPopUpColor' style = {this.props.color} onClick = {() => {this.tagBoxStateToggle()}} ></div>
              {this.tagPopUp()}
        </div>

    );
  }

}
//bruh
