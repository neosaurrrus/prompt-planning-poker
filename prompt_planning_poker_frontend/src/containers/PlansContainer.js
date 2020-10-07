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


class PlansContainer extends Component {

  componentDidMount(){
    this.props.getPlans()
  }



 

  render() {
    return (
      // <div>
      //   <PlanInput addPlan={this.props.addPlan} />
      //   <Plans getPlans={this.props.getPlans} deletePlan={this.props.deletePlan} plans={this.props.plans}/>
      // </div>
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/new-plan">New Plan</Link>
            </li>
          </ul>

          <Switch>
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

PlansContainer.defaultProps= {
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

export default connect(mapStateToProps, mapDispatchToProps)(PlansContainer);
