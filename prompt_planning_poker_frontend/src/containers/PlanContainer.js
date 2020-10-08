import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Router, withRouter} from 'react-router-dom'
import PlanHeader from '../components/PlanHeader'
import StoryContainer from './StoriesContainer'
import { getPlan, getPlans, addPlan, deletePlan } from '../actions/planActions'


class PlanContainer extends Component {

  state = {plan:{}}

  componentDidMount() {
    
    this.setState({
      plan: this.props.plans.find(plan => plan.url === this.props.match.params.url)
      Figure out how to get current plan from plans using url!
  })
}

  render() {
    return (
         <div>
           <PlanHeader deletePlan={this.props.deletePlan} plan={this.props.plan} />
           <StoryContainer plan={this.props.plan}></StoryContainer>
       </div>
    );
  }
};

PlanContainer.defaultProps = {
  plan:{
    name:"Error",
  owner:"Error"
  }
}

const mapStateToProps = (state,ownprops) => { 
  const url = ownprops.match.params.url
 
  return {plans: state.plans}
}
const mapDispatchToProps = (dispatch,ownProps) => {
  const url = ownProps.match.params.url
  
  return {
    getPlan: (id) => dispatch(getPlan(id)),
    getPlans: () => dispatch(getPlans()),
    deletePlan: (id) => dispatch(deletePlan(id)),
    addPlan: (plan) => dispatch(addPlan(plan)),
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PlanContainer));


