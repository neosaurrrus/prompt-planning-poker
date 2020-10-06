import React, { Component } from 'react';
import Plan from './Plan'


class Plans extends Component {

  state = {plans:[]}
  
  componentDidMount() {
    this.props.getPlans()
  }
x
  render() {
    return(
      <div>
        <h2>Plans</h2>
        
        {this.props.plans.map( plan => <Plan key={plan.id} deletePlan={this.props.deletePlan} plan={plan}/>)}

      </div>
    );
  }
};
Plans.defaultProps = {
 plans:[]
}
export default Plans;

