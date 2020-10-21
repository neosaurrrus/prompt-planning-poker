import React, { Component } from 'react';
import {connect} from 'react-redux'

import PlanInput from '../components/PlanInput';
import Intro from '../components/Intro'
import PlanContainer from './PlanContainer';

import { getPlans, addPlan, deletePlan, setUserName } from '../actions/planActions'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


class AppContainer extends Component {

  state = {
    userName:"GUEST",
    pin: 1234
  }

  componentDidMount(){
    this.props.getPlans()
    this.props.setUserName(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.toUpperCase(),
    }, this.afterSetState)
    
  }

  afterSetState = () => {
    this.props.setUserName(this.state)
  }

  render() {
    return (
        <Router>
        <nav className='App-header'>
              <Link to="/">Prompt-Planning-Poker</Link>
              <span><label>Name:</label><input type='text' name='userName' value={this.state.userName} onChange={this.handleChange} placeholder='<Enter Name>'></input></span>
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
  return {plans: state.plans,
          setUserName: state.setUserName
          }
}

const mapDispatchToProps = dispatch => {
  return {
    getPlans: () => dispatch(getPlans()),
    deletePlan: (id) => dispatch(deletePlan(id)),
    addPlan: (plan) => dispatch(addPlan(plan)),
    setUserName: (userName) => dispatch(setUserName(userName))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
