import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Router, withRouter} from 'react-router-dom'
import PlanHeader from '../components/PlanHeader'
import StoriesContainer from './StoriesContainer'
import { getPlan, getPlans, addPlan, deletePlan} from '../actions/planActions'


class PlanContainer extends Component {
   

  render() {
    return (
         <div>           
           <PlanHeader  deletePlan={this.props.deletePlan} plan={this.props.plan}/>
           <StoriesContainer plan={this.props.plan}/>
       </div>
    );
  }
};

PlanContainer.defaultProps = {
  plan:{
    name:"Error",
  owner:"Error"
  },
  plans:[]
}

const mapStateToProps = (state,ownprops) => { 
  const url = ownprops.match.params.url
  const plan = state.plans.find(plan => plan.url === url) 
  return {plan}
}
const mapDispatchToProps = (dispatch,ownProps) => {
  const url = ownProps.match.params.url
  return {
    getPlan: (id) => dispatch(getPlan(id)),
    deletePlan: (id) => dispatch(deletePlan(id)),
    addPlan: (plan) => dispatch(addPlan(plan)),
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PlanContainer));


