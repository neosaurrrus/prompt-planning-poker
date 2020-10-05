import React, { Component } from 'react';
import {connect} from 'react-redux'
class PlansContainer extends Component {

  state = {}

  newPlan = () =>{
    console.log("New Plan - ADD PLan")
    
    this.props.addPlan("test")

  }
  render() {
    return (
      <div>
        <button onClick={ () => this.newPlan()}>New Plan</button>
      </div>
    )
  }
}


const mapStateToProps = state => { return {
  plans: state.plans  
}}
  
const mapDispatchToProps = dispatch => ({
  addPlan: name  => dispatch({ type: "ADD_PLAN", name})
})

export default connect(mapStateToProps, mapDispatchToProps)(PlansContainer);
