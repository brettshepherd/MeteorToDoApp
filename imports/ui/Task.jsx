import React, { Component, PropTypes } from 'react';
import { TasksDB } from '../api/tasks.js';
import DotPopUp from './dotPopUp.jsx';
import TagPopUp from './tagPopUp.jsx';

// Task component - represents a single todo item
export default class Task extends Component {

  //constructor
  constructor(){
    super();
    this.state = ({
      dotCLick: false,
      tagCLick: false,
    });
  }
//---------------ELLIPSES METHODS------------
dotToggle(){
    this.setState({dotCLick: !this.state.dotCLick});
}

dotPopUp(){
  let tagColor = {backgroundColor: `${this.props.task.tagColor}` };
  if(this.state.dotCLick){
    return( <DotPopUp id= {this.props.task._id} toggleUnmount = {this.dotToggle.bind(this)} togglePin = {this.togglePinned.bind(this)} color = {tagColor}/>);
  }
}
//---------------TAG METHODS------------
//if task has tag
  tag(){
    let tagColor = {backgroundColor: `${this.props.task.tagColor}` };
    if(this.props.task.tag){
      return(
          <div className = 'colorBoxCont'>
            <div className = 'colorBox' style = {tagColor} onClick = {this.tagToggle.bind(this)}></div>
              {this.tagPopUp()}
          </div>
      );
    }
  }
//toggle tag on and off
tagToggle(){
    this.setState({tagCLick: !this.state.tagCLick});
}
//toggle tag color box on and off
tagPopUp(){
  if(this.state.tagCLick){
    return( <TagPopUp toggleUnmount = {this.tagToggle.bind(this)} secondClass = {'taskTagPopUp'} changeTagColor = {(color) =>{this.changeTagColor(color)}} />);
  }
}
//change tag color in data-base
changeTagColor(color){

  TasksDB.update(this.props.task._id, {
    $set: { tagColor: color }
  });
}

//---------------PIN METHODS------------

//if task was pinned
pin(){
  if(this.props.task.pinned){
    return(
        <div className = 'pin'><img src='images/pin.png' onClick = {this.togglePinned.bind(this)}/></div>
    );
  }
}
//toggle pin on and off
togglePinned() {

  if(this.props.task.pinned){
    TasksDB.update(this.props.task._id, {
      $set: { pinned: false }
    });
  }
  else{
    TasksDB.update(this.props.task._id, {
      $set: { pinned: true }
    });
  }

}
//----------CHECKBOX/TEXT METHODS----------

  toggleChecked() {
    // Set the checked property to the opposite of its current value
    TasksDB.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked }
    });
  }


  deleteThisTask() {
    TasksDB.remove(this.props.task._id);
  }


//---------------RENDER---------------
  render() {
    const taskClassName = this.props.task.checked ? 'checked' : '';

    return (
      <li className= {`${taskClassName} listLi`} >

        {/* CheckBox */}
        <svg onClick={this.toggleChecked.bind(this)} className= {`checkmark ${this.props.task.checked}`} width="50px" height="50px" viewBox="0 0 12 12" style={{strokeLinecap: 'round', strokeLinejoin: 'round'}}>
          <circle className= {`defaultCircleStroke  ${this.props.task.checked}`} cx={6} cy={6} r={6} style={{fill: 'none'}} />
          <circle className= {`checkmark__circle ${this.props.task.checked}`} cx={6} cy={6} r={6} style={{fill: 'none'}} />
          <path className= {`checkmark__check ${this.props.task.checked}`} d="M4.151,5.897l1.288,1.332l2.41,-2.458" style={{fill: 'none'}} />
        </svg>

        <div className = 'taskBar'>
          {/* Text */}
          <div className = 'textAndCheckContainer'>
            <span className="text">{this.props.task.text}</span>
          </div>
          {/* DELETE BUTTON */}
          <button className="delete" onClick={this.deleteThisTask.bind(this)}>
            &times;
          </button>

          {/* Ellipses */}
          <div className = 'ellipses' onClick = {this.dotToggle.bind(this)}>
            <img className= 'dotsIMG' src='images/ellipses.png' />
            {this.dotPopUp()}
          </div>

          {/* Pin */}
            {this.pin()}
          {/* ColorTagBox */}

            {this.tag()}
          {/* UserName */}
          <div className= 'userNameTask'>
          {this.props.task.username}
          </div>
        </div>












      </li>
    );
  }

}

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};
