import React, { Component } from 'react';
import Plan from './Plan'


class Plans extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.getPlans()
  }

  render() {
    return(
      <div>
        <h2>Plans</h2>
        
        {/* {this.props.plans.map( plan => <Plan deletePlan={this.props.deletePlan} plan={plan}/>)} */}

      </div>
    );
  }
};

export default Plans;