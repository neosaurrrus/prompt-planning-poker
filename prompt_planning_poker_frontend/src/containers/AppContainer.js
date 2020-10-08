import React, { Component } from 'react';
import {connect} from 'react-redux'

import PlanInput from '../components/PlanInput';
import PlanContainer from './PlanContainer';

import { getPlans, addPlan, deletePlan } from '../actions/planActions'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


class AppContainer extends Component {

  componentDidMount(){
    this.props.getPlans()
  }

  render() {
    return (
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Prompt Planning Poker</Link>
            </li>
            <li>
              <Link to="/new-plan">New Plan</Link>
            </li>
            
          </ul>

          <Switch>
            <Route path="/new-plan">
              <PlanInput addPlan={this.props.addPlan} getPlanUrl={this.getPlanUrl} />
            </Route>
            <Route path="/plans/:url">
            <PlanContainer deletePlan={this.props.deletePlan}  />
            </Route> 
          </Switch>
        </div>
        </Router>


    )
  }
}

AppContainer.defaultProps= {
  plans: [{id:"not loaded",
           url:"not loaded"}]
}

// const mapStateToProps = state => { 
//   return {plans: state.plans}
// }

const mapDispatchToProps = dispatch => {
  return {
    getPlans: () => dispatch(getPlans()),
    deletePlan: (id) => dispatch(deletePlan(id)),
    addPlan: (plan) => dispatch(addPlan(plan)),
  }
}

export default connect(null, mapDispatchToProps)(AppContainer);
