import React, { Component, PropTypes } from 'react';


// Task component - represents a single todo item
export default class TagPopUp extends Component {

removeComponent(){

}

stopProp(e){
  e.stopPropagation();
}
  render() {

    return (

        <div className = {`colorPopUpBox ${this.props.secondClass}`} onClick = {this.stopProp.bind(this)}  >
          <div className = 'colorRow' >
            <div className = "tagPopUpColor color1" onClick = {() => {this.props.changeTagColor("#FF4081");this.props.toggleUnmount()}}></div>
            <div className = "tagPopUpColor color2" onClick = {() => {this.props.changeTagColor("#F34336");this.props.toggleUnmount()}}></div>
            <div className = "tagPopUpColor color3"  onClick = {() => {this.props.changeTagColor("#9B27AF");this.props.toggleUnmount()}}></div>
          </div>
          <div className = 'colorRow'>
            <div className = "tagPopUpColor color4"  onClick = {() => {this.props.changeTagColor("#673AB6");this.props.toggleUnmount()}}></div>
            <div className = "tagPopUpColor color5"  onClick = {() => {this.props.changeTagColor("#3F51B4");this.props.toggleUnmount()}}></div>
            <div className = "tagPopUpColor color6"  onClick = {() => {this.props.changeTagColor("#03A8F3");this.props.toggleUnmount()}}></div>
          </div>
          <div className = 'colorRow'>
            <div className = "tagPopUpColor color7"  onClick = {() => {this.props.changeTagColor("#4CAE50");this.props.toggleUnmount()}}></div>
            <div className = "tagPopUpColor color8"  onClick = {() => {this.props.changeTagColor("#FEEA3B");this.props.toggleUnmount()}}></div>
            <div className = "tagPopUpColor color9"  onClick = {() => {this.props.changeTagColor("#FE9700");this.props.toggleUnmount()}}></div>
          </div>

        </div>

    );
  }

}
//lol
