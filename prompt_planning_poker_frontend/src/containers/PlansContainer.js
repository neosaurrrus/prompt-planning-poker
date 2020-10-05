import React, { Component } from 'react';
import {connect} from 'react-redux'
class PlansContainer extends Component {

  state = {}

  newplan = () =>{
    console.log("New Plan - ADD PLan")
  }
  render() {
    return (
      <div>
        <button onClick={this.newPlan}>New Plan</button>
      </div>
    )
  }
}


  
const mapDispatchToProps = dispatch => ({
  addPlan: name  => dispatch({ type: "ADD_PLAN", name})
})

export default connect(null, mapDispatchToProps)(PlansContainer);
