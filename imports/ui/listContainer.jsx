import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { TasksDB } from '../api/tasks.js';
import Task from './Task.jsx';
import TagPopUp from './tagPopUp.jsx';

// App component - represents the whole app
class ListContainer extends Component {
  //------------CONSTRUCTOR-------------
  constructor(){
    super();
    this.state ={
      hasTag: false,
      tagBoxOpen: false,
      pinSrc: 'images/noPin.png',
      tagColor: '#757575'
    };
  }
  // ------SUBMIT INFO TO DATABASE----------
    handleSubmit(event,hasTag,hasPin) {
    event.preventDefault();
    //check to see it was pinned
    let pinOn = false;
    if(hasPin==='images/pin.png'){
       pinOn = true;
    }
    // Find the text field via ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    TasksDB.insert({
      text,
      createdAt: new Date(), // current time
      tag: hasTag,
      tagColor: this.state.tagColor,
      checked: false,
      pinned: pinOn,
      username: this.props.userOBJ.username

    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  //seperate tasks from array using map
  renderTasks(){
      return this.props.tasksDB.map((taskArg) => (
        <Task key={taskArg._id} task={taskArg}  />
      ));
    }

  //---------------TAG METHODS------------
  //toggle Tag Box
  toggleTagBox(){
    this.setState({tagBoxOpen: !this.state.tagBoxOpen});
  }
  //addTag
  addTagAndToggleBox(){
    this.setState({hasTag: true});
    this.setState({tagBoxOpen: !this.state.tagBoxOpen});
  }
  removeTag(){
    this.setState({hasTag: false});
    this.refs.tagInput.style.backgroundColor = '#757575';
  }
  //change color
  changeTagColor(color){
      this.refs.tagInput.style.backgroundColor = color;
      this.setState({tagColor: color});
  }

  tagColorBox(){
    if(this.state.tagBoxOpen){
      return(
      <TagPopUp toggleUnmount = {this.addTagAndToggleBox.bind(this)} secondClass = {'formTagPopUp'} changeTagColor = {(color) =>{this.changeTagColor(color)}}/>
      );
    }
  }


  //---------------PIN METHODS------------
  //togglePin
  removePin(){
      this.setState({pinSrc: 'images/noPin.png'});
  }
  togglePin(){
    if(this.state.pinSrc ==='images/pin.png'){
      this.setState({pinSrc: 'images/noPin.png'});
    }
    else{
      this.setState({pinSrc: 'images/pin.png'});
    }

  }
//--------sub btn toggle-------
subBtnToggle(){
  this.refs.subBtn.classList.remove("subBtnAnim");

  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // Oops! This won't work in strict mode. Thanks Felis Phasma!
  // element.offsetWidth = element.offsetWidth;
  // Do this instead:
  void this.refs.subBtn.offsetWidth;

  // -> and re-adding the class
  this.refs.subBtn.classList.add("subBtnAnim");
}
  //render
  render() {

    return (
      <div className = "listContainer">
      <div className="container">
        <header className="listHeader">
          <h1>Todo List</h1>
        </header>

          <form className="new-task"  onSubmit={(e)=>{this.handleSubmit(e,this.state.hasTag,this.state.pinSrc);this.removeTag();this.removePin();}} >
            <div className = 'newTaskBar'>
             <input className = 'typeArea'
               type="text"
               ref="textInput"
               placeholder="Type to add new tasks..."
             />

             {/* testTagBtn */}
             <div className = 'colorBoxFormCont'>
               <div className = {`colorBoxForm ${this.state.hasTag}`}  ref="tagInput" onClick = {()=>{this.toggleTagBox()}}></div>
               {this.tagColorBox()}
             </div>

             {/* Pin */}
             <div className = 'pinTest'><img src= {this.state.pinSrc} onClick = {this.togglePin.bind(this)}  /></div>
           </div>
             {/* Submit Button */}
             <div className = 'subBtnCont'>
            <button className = 'subBtn' type="submit"   ref= 'subBtn' onClick = {this.subBtnToggle.bind(this)}></button>
            <p>+</p>
            </div>



         </form>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    </div>
    );
  }

}

ListContainer.propTypes = {
  tasksDB: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    tasksDB: TasksDB.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, ListContainer);
