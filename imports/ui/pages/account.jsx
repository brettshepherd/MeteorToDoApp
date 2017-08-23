import React, { Component, PropTypes } from 'react';


export default class Account extends Component {

constructor(props){
  super(props);
  this.state = {anim:false};

}

toggleAnim(){
  this.setState({anim: !this.state.anim});
}
  render() {


    return (
    <div>

      <p onClick = {this.toggleAnim.bind(this)}>toggleAnim</p>

      <svg className= {`checkmark ${this.state.anim}`} width="50px" height="50px" viewBox="0 0 12 12" style={{strokeLinecap: 'round', strokeLinejoin: 'round'}}>
        <circle className= {`defaultCircleStroke  ${this.state.anim}`} cx={6} cy={6} r={6} style={{fill: 'none'}} />
        <circle className= {`checkmark__circle ${this.state.anim}`} cx={6} cy={6} r={6} style={{fill: 'none'}} />
        <path className= {`checkmark__check ${this.state.anim}`} d="M4.151,5.897l1.288,1.332l2.41,-2.458" style={{fill: 'none'}} />
      </svg>


    </div>
    );
  }
}
