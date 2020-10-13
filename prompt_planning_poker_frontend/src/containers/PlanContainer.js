import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Router, withRouter} from 'react-router-dom'
import PlanHeader from '../components/PlanHeader'
import StoriesContainer from './StoriesContainer'
import { getPlan, getPlans, addPlan, deletePlan } from '../actions/planActions'


class PlanContainer extends Component {
   
  getPlan = ()=>{
    // console.log(this.props.plans.find( plan => plan.url === this.props.match.params.url))
    this.setState = ({
      plan: this.props.plans.find( plan => plan.url === this.props.match.params.url)
    })
    const url = this.props.match.params.url
    return this.props.plans.find( plan => plan.url === this.props.match.params.url)
  }

  planName = this.props.getPlan(this.props.match.params.url)

  render() {
    return (
         <div>           
           <PlanHeader  deletePlan={this.props.deletePlan} plan={this.getPlan()}/>
           <StoriesContainer getPlan={this.props.getPlan}/>
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
 
  return {plan: state.plan}
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


