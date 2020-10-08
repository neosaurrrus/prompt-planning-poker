import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Router, withRouter} from 'react-router-dom'
import PlanHeader from './PlanHeader'


class Plan extends Component {

  getStories = (planUrl) => {

  }
  handleDelete = (e) => {
    this.props.deletePlan(this.props.plan.id)
  }
  
  componentDidMount(){
    console.log(this.props.match.params.url)

  }


  render() {
    const { name, owner} = this.props.plan;

    return (
         <div>
        <h2>Plan</h2>
        <PlanHeader deletePlan={this.props.deletePlan} plan={this.props.plan} />
       </div>
    );
  }
};

Plan.defaultProps = {
  plan:{
    name:"",
  owner:""
  }
}

const mapStateToProps = (state,ownprops) => { 
  const url = ownprops.match.params.url
 
  return {plan: state.plans.find(plan => plan.url === url) }
}
export default withRouter(connect(mapStateToProps)(Plan));


