import React, { Component } from 'react';
import {connect} from 'react-redux'
import PlanInput from '../components/PlanInput';
import Intro from '../components/Intro'
import PlanContainer from './PlanContainer';
import UserPin from '../components/UserPin'
import { getPlans, addPlan, deletePlan, setUser } from '../actions/planActions'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
class AppContainer extends Component {

  state = {
    userName:"GUEST"
  }

  componentDidMount(){
    this.props.getPlans()
    this.props.setUser(this.state)
  }
  componentWillReceiveProps(){
    this.setState(this.props.user)
  }

  render() {
    if (this.props.user){
      return (
        <Router>
        <nav className='App-header'>
              <Link to="/">Prompt-Planning-Poker</Link>
              <UserPin />
              <Link id='new-plan'to="/new-plan">New Session</Link>
        </nav>
          <Switch>
            <Route path="/new-plan">
              <PlanInput setUser={this.props.setUser} addPlan={this.props.addPlan} getPlanUrl={this.getPlanUrl} />
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
    } else {
      return null
    }
 
  }
}

const mapStateToProps = state => { 
  return {plans: state.plans,
          setUserName: state.setUserName,
          user: state.user
          }
}

const mapDispatchToProps = dispatch => {
  return {
    getPlans: () => dispatch(getPlans()),
    deletePlan: (id) => dispatch(deletePlan(id)),
    addPlan: (plan) => dispatch(addPlan(plan)),
    setUser: (user) => dispatch(setUser(user))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
