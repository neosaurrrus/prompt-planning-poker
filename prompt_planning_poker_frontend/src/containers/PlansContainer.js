import React, { Component } from 'react';
import {connect} from 'react-redux'
import PlanInput from '../components/PlanInput';
import Plans from '../components/Plans';

import { getPlans, addPlan, deletePlan } from '../actions/planActions'
// import {addPlan} from '../actions/planActions'

class PlansContainer extends Component {

  state = {}

  newPlan = () =>{
    this.props.addPlan("test")
  }

  render() {
    return (
      <div>
        <PlanInput addPlan={this.props.addPlan} />
        <Plans getPlans={this.props.getPlans} deletePlan={this.props.deletePlan} plans={this.props.plans}/>
      </div>
    )
  }


const mapStateToProps = state => { 
  return {plans: state.plans}
}

const mapDispatchToProps = dispatch => {
  return {
    getPlans: () => dispatch(getPlans()),
    deletePlan: (id) => dispatch(deletePlan(id)),
    addPlan: (plan) => dispatch(addPlan(plan)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlansContainer);
