import React, { Component } from 'react';
import {connect} from 'react-redux'
import PlanInput from '../components/PlanInput';
import Plans from '../components/Plans';
import { getPlans } from '../actions/planActions'
class PlansContainer extends Component {

  state = {}

  newPlan = () =>{
    this.props.addPlan("test")
  }

  render() {
    return (
      <div>
        <PlanInput addPlan={this.props.addPlan} />
        <Plans getPlans={this.props.getPlans} deletePlan={this.props.deletePlan} />
      </div>
    )
  }
}
// WHY is there no plans in the state?

const mapStateToProps = state => { 
  return {plans: state.plans}
}
  
// const mapDispatchToProps = dispatch => ({
//   addPlan: plan  => dispatch({ type: "ADD_PLAN", plan}),
//   deletePlan: id => dispatch({ type: "DELETE_PLAN", id})
// })

const mapDispatchToProps = dispatch => {
  return {
    getPlans: () => dispatch(getPlans())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlansContainer);
