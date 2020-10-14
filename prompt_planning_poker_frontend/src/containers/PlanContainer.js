import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import PlanHeader from '../components/PlanHeader'
import StoriesContainer from './StoriesContainer'
import { getPlan, getPlans, addPlan, deletePlan,editPlan} from '../actions/planActions'


class PlanContainer extends Component {
   
  getPlans = ()=>{
    this.props.getPlans()
    return this.props.plans.find( plan => plan.url === this.props.match.params.url)
  }
  componentDidMount(){
    this.props.getPlan(this.props.match.params.url)
  }
  render() {
    return (
         <div>           
           <PlanHeader  deletePlan={this.props.deletePlan} getPlan={this.props.getPlan}editPlan={this.props.editPlan} plan={this.props.plan}/>
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

const mapStateToProps = (state, ownProps) => { 
  return {plans: state.plans, plan: state.plans.find( plan => plan.url === ownProps.match.params.url)
}
}

const mapDispatchToProps = (dispatch,ownProps) => {

  return {
    getPlan: (id) => dispatch(getPlan(id)),
    getPlans: () => dispatch(getPlans()),
    deletePlan: (id) => dispatch(deletePlan(id)),
    addPlan: (plan) => dispatch(addPlan(plan)),
    editPlan: (plan, changedKey) => dispatch(editPlan(plan,changedKey))
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PlanContainer));


