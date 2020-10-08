import React, { Component } from 'react';
import {connect} from 'react-redux'
import PlanInput from '../components/PlanInput';
import Plans from '../components/Plans';
import Plan from '../components/Plan';

import { getPlans, addPlan, deletePlan } from '../actions/planActions'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,

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
              <Link to="/new-plan">New Plan</Link>
            </li>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
          </ul>

          <Switch>
            {/* <Route path="/">
              <AppContainer/>
            </Route> */}
            <Route path="/new-plan">
              <PlanInput addPlan={this.props.addPlan} getPlanUrl={this.getPlanUrl} />
            </Route>
            <Route path="/plans/:url">
            <Plan deletePlan={this.props.deletePlan}  />
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);