import React, { Component } from 'react';
import {connect} from 'react-redux'
import PlanInput from '../components/PlanInput';
import Plans from '../components/Plans';
class PlansContainer extends Component {

  state = {}

  newPlan = () =>{
    this.props.addPlan("test")
  }
  render() {
    return (
      <div>
        <PlanInput addPlan={this.props.addPlan} />
        <Plans plans={this.props.plans} deletePlan={this.props.deletePlan} />
      </div>
    )
  }
}


const mapStateToProps = state => { return {
  plans: state.plans  
}}
  
const mapDispatchToProps = dispatch => ({
  addPlan: plan  => dispatch({ type: "ADD_PLAN", plan}),
  deletePlan: id => dispatch({ type: "DELETE_PLAN", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(PlansContainer);
