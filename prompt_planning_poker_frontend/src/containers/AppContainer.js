import React, { Component } from 'react';
import {connect} from 'react-redux'

import PlanInput from '../components/PlanInput';
import Intro from '../components/Intro'
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
        <nav className='App-header'>
 
              <Link to="/">Prompt-Planning-Poker</Link>
              <Link to="/new-plan">New Plan</Link>
            
         
        

        </nav>
        <section>

        </section>
          <Switch>
            <Route path="/new-plan">
              <PlanInput addPlan={this.props.addPlan} getPlanUrl={this.getPlanUrl} />
            </Route>
            <Route path="/plans/:url">
            <PlanContainer deletePlan={this.props.deletePlan} plans={this.props.plans} />
            </Route> 
            <Route path="/">
            <Intro></Intro>
            </Route>
          </Switch>
      
        </Router>


    )
  }
}


const mapStateToProps = state => { 
  return {plans: state.plans}
}

const mapDispatchToProps = dispatch => {
  return {
    getPlans: () => dispatch(getPlans()),
    deletePlan: (id) => dispatch(deletePlan(id)),
    addPlan: (plan) => dispatch(addPlan(plan))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
